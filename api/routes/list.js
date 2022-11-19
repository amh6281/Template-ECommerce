const List = require("../models/List");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndEntrepreneur,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndEntrepreneur, async (req, res) => {
  const newList = new List(req.body);
  try {
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndEntrepreneur, async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    res.status(201).json("리스트가 삭제되었습니다.");
    res.status(201).json(savedList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/", async (req, res) => {
  let list = [];
  try {
    list = await List.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
