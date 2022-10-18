const Product = require("../models/Product");
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
  const newProduct = new Product({ ...req.body, userId: req.user.id });

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndEntrepreneur, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndEntrepreneur, async (req, res) => {
  const product = await Product.findById(req.params.id);
  const shop = await Shop.findById(req.params.id);
  try {
    if (req.user.id === product.userId || req.user.id === shop.userId)
      await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("상품이 삭제되었습니다.");
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

//GET BY CATEGORIES
router.get("/categories", async (req, res, next) => {
  const categories = req.query.categories.split(",");
  try {
    const products = await Product.find({
      categories: { $in: categories },
    }).limit(20);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

//SEARCH
router.get("/search", async (req, res) => {
  const query = req.query.q;
  try {
    const products = await Product.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCTS BY USERID
router.get("/:userId", async (req, res) => {
  try {
    const products = await Product.find({ userId: req.params.userId });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCTS BY SHOPID
router.get("/:shopId", async (req, res) => {
  try {
    const products = await Product.find({ shopId: req.params.shopId });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  //shopId로 가져오기
  const qShopId = req.query.shopId;
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
    } else if (qShopId) {
      products = await Product.find({
        shopId: {
          $in: [qShopId],
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
