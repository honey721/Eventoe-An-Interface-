import express from "express";
import {createArticle,getAllArticle} from "../controllers/article.js";

const router = express.Router();

//CREATE
router.post("/", createArticle);

//GET
// router.get("/find", getArticle);

// // Update

router.get("/findAll",getAllArticle);
// router.put("/update/:id", updateArticle);

// // Delete 
// router.delete("/delete/:id",deleteArticle)


export default router;