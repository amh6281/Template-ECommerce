const Shop = require("../models/Shop");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndEntrepreneur,
} = require("./verifyToken");

const router = require("express").Router();

//SEARCH
router.get("/search", async (req, res) => {
  const query = req.query.q;
  try {
    const shops = await Shop.find({
      shopname: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(shops);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE
router.post("/", verifyTokenAndEntrepreneur, async (req, res) => {
  const newShop = new Shop({ ...req.body, userId: req.user.id });

  try {
    const savedShop = await newShop.save();
    res.status(200).json(savedShop);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndEntrepreneur, async (req, res, next) => {
  try {
    const shop = await Shop.findById(req.params.id);
    if (!shop) res.status(404).json("Shop not found");
    if (req.user.id === shop.userId) {
      const updatedShop = await Shop.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedShop);
    }
  } catch (err) {
    next(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Shop.findByIdAndDelete(req.params.id);
    res.status(200).json("쇼핑몰이 삭제되었습니다.");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SHOP
router.get("/find/:id", async (req, res) => {
  try {
    const shop = await Shop.findById(req.params.id);
    res.status(200).json(shop);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SHOP BY USERID
router.get("/:userId", async (req, res) => {
  try {
    const shop = await Shop.find({ userId: req.params.userId });
    res.status(200).json(shop);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL SHOPS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qUserId = req.query.userId;
  const qCategory = req.query.category;
  try {
    let shops;

    if (qNew) {
      shops = await Shop.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      shops = await Shop.find({
        category: {
          $in: [qCategory],
        },
      });
    } else if (qUserId) {
      shops = await Shop.find({
        userId: {
          $in: [qUserId],
        },
      });
    } else {
      shops = await Shop.find();
    }
    res.status(200).json(shops);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
