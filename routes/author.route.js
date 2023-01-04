import controller from "../controllers/Author.js";
import schema from "../schemas/authors.schema.js";
import  validator  from "../middlewares/validator.js";
import express from 'express'
let router = express.Router();

const {create} = controller;
router.post('/',validator(schema), create)


export default router;