import express from 'express';
import controller from '../controllers/chapter.one.controller';
let router = express.Router();

const {read} = controller

router.post("/",read)

export default router