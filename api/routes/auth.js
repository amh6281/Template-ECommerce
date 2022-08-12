const router = require("express").Router();
const User = require("../models/User");
const Entrepreneur = require("../models/Entrepreneur");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//USER REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//ENTREPRENEUR REGISTER
router.post("/eregister", async (req, res) => {
  const newEntrepreneur = new Entrepreneur({
    businessnumber: req.body.businessnumber,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedEUser = await newEntrepreneur.save();
    res.status(201).json(savedEUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("잘못된 권한입니다.");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    Originalpassword !== req.body.password &&
      res.status(401).json("잘못된 권한입니다.");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

//ENTREPRENEUR
router.post("/elogin", async (req, res) => {
  try {
    const entrepreneur = await Entrepreneur.findOne({
      username: req.body.username,
    });
    !entrepreneur && res.status(401).json("잘못된 권한입니다.");

    const hashedPassword = CryptoJS.AES.decrypt(
      entrepreneur.password,
      process.env.PASS_SEC
    );
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    Originalpassword !== req.body.password &&
      res.status(401).json("잘못된 권한입니다.");

    const accessToken = jwt.sign(
      {
        id: entrepreneur._id,
        isAdmin: entrepreneur.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = entrepreneur._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
