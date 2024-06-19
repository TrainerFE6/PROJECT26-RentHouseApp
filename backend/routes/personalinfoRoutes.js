import express from "express";
import {
  getAllPersonalInfo,
  getPersonalInfoById,
  createPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
} from "../controllers/personalinfoController.js";

const router = express.Router();

router.get("/personal-info", getAllPersonalInfo);
router.get("/personal-info/:id", getPersonalInfoById);
router.post("/personal-info", createPersonalInfo);
router.put("/personal-info/:id", updatePersonalInfo);
router.delete("/personal-info/:id", deletePersonalInfo);

export default router;
