import express from "express";
import {
  addApplyRent,
  deleteApplyRent,
  getApplyRent,
  getApplyRentById,
} from "../controllers/applyrentController.js";

const router = express.Router();

router.get("/apply-rent", getApplyRent);
router.get("/apply-rent/:id", getApplyRentById);
router.post("/apply-rent", addApplyRent);
router.delete("/apply-rent/:id", deleteApplyRent);

export default router;
