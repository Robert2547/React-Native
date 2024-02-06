import express from "express";

const router = express.Router();

//controller
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.get("/", (req, res) => {
  return res.json({
    data: "You hit the auth endpoint",
  });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", resetPassword);

export default router;