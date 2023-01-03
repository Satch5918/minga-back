import { Comment } from '../models/NewComent.js'
import mongoose from 'mongoose';

const commentsController = {
    create: async(req,res)=> { 
        try {
            const { chapter_id,user_id,text,commentable_id } = req.body
            await Comment.create({ chapter_id,user_id,text,commentable_id })
            //en body el usuario manda un objeto CON TODO LO QUE NECESITA
            //(en este caso en particular para crear una categoria)
            res.status(201).json({
                success: true,
                response: 'done',
               
            })
        } catch(error) {
            console.log(error)
        }
    },
    read: async(req,res)=> {  
        try { 
            let comments = await Comment.find() 
            if (comments) {
                res.status(200).json({
                    success: true,
                    response: Comments
                })
            } else {
                res.status(404).json({
                    success: false,
                    response: 'not found'
                })
            }
            
        } catch(error) { 
            console.log(error)
        }
    },
    one: async(req,res)=> {  
        try {
      const { id } = req.params; 
            let one = await Comment.findById(id)
            if (one) {
                res.status(200).json({
                    success: true,
                    response: one
                })
            } else {
                res.status(404).json({
                    success: false,
                    response: 'not found'
                })
            }            
        } catch(error) {
            console.log(error)
        }
    },
    update: async(req,res)=> {  
        try {

            const { id } = req.params;
           
           await Comment.findOneAndUpdate(
                { _id: id }, 
                req.body
            )
            res.status(200).json({
                success: true,
                response: 'updated',
            })
        } catch(error) {
            console.log(error)
        }
    },
    destroy: async(req,res)=> {  
        try {
            const { id } = req.params
            await Category.findByIdAndDelete(id)
            res.status(200).json({
                success: true,
                response: 'deleted'
            })
        } catch(error) {
            console.log(error)
        }
    }
}


export default commentsController



