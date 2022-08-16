const Shop = require("../models/Shop");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndEntrepreneur,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndEntrepreneur, async (req, res) => {
  const newShop = new Shop({ userId: req.user.id, ...req.body });

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

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
