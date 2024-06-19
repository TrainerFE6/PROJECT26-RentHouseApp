import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransaction,
  getTransactionById,
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/transaksi", getTransaction);
router.get("/transaksi/:id", getTransactionById);
router.post("/transaksi", addTransaction);
router.delete("/transaksi/:id", deleteTransaction);

export default router;
