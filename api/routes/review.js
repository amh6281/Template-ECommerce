const Review = require("../models/Review");
const Product = require("../models/Product");
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();
    res.status(200).send(savedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const review = await Review.findById(res.params.id);
    const product = await Product.findById(res.params.id);
    if (req.user.id === review.userId || req.user.id === product.userId) {
      await Review.findByIdAndDelete(req.params.id);
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
    const reviews = await Review.find({ productId: req.params.productId });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
