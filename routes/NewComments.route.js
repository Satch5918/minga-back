import mongoose from 'mongoose';
import express  from 'express';
const router = express.Router();
import { Router } from 'express';
import  Comments from '../controllers/NewCommet.Controller'

router.post('/comments', Comments,createComment);





router.post('/newModel/', createNewModel);