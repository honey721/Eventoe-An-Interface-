import express from "express";
import { comlogin,emplogin, empregister,comregister } from "../controllers/auth.js";

const router = express.Router();

router.post("/regemp", empregister)
router.post("/regcom", comregister)
router.post("/logemp", emplogin)
router.post("/logcom", comlogin)

export default router
