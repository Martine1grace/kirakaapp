const express = require("express");

const {
  register,
  login,
  getMe,
  logout,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require("../controllers/auth");
const router = express.Router();
const { protect } = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
