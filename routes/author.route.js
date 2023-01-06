import controller from "../controllers/author.controllers.js";
import schema from "../schemas/authors.schema.js";
import  validator  from "../middlewares/validator.js";
import express from 'express'
import authorIsActive from "../middlewares/authorIsActive.js";
let router = express.Router();

const {create} = controller;
router.post('/',validator(schema), authorIsActive, create)


export default router;