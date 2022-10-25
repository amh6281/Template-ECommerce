const Comment = require("../models/Comment");
const Product = require("../models/Product");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const product = await Product.findById(res.params.id);
    if (req.user.id === comment.userId || req.user.id === product.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("댓글이 삭제되었습니다.");
    } else {
      res.status(403).json("자신의 댓글만 삭제할 수 있습니다.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:productId", async (req, res) => {
  try {
    const comments = await Comment.find({ productId: req.params.productId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
