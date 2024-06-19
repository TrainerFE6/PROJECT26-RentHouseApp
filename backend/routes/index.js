import express from "express";
import {
  register,
  login,
  refreshToken,
  logout,
} from "../controllers/loginController.js";
import { verifyToken } from "../middleware/verify.js";
import { verifyRole } from "../middleware/verifyRole.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

// Rute yang diproteksi berdasarkan peran
router.get("/dashboard", verifyToken, verifyRole("admin"), (req, res) => {
  console.log("Accessing /dashboard");
  res.send("Dashboard - Admin Content");
});

router.get("/home2", verifyToken, verifyRole("user"), (req, res) => {
  console.log("Accessing /home2");
  res.send("Home2 - User Content");
});

export default router;
