import controller from "../controllers/Author.js";
import schema from "../schemas/authors.schema.js";
import  validator  from "../middlewares/validator.js";
//import express, { router } from 'express';
import express from 'express'
let router = express.Router();

const {create} = controller;
router.post('/',validator(schema), create)

//const newauthor= controller
//router.get('/',newauthor )

export default router;