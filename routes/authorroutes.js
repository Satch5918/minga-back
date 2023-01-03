import controller from "../controllers/Author";
import express, { router } from 'express';
var router = express.Router();

const newauthor= controller
router.get('/',newauthor )

export default router;