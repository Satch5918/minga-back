import { query } from 'express'
import  {Comment}  from '../models/Comment.js'


const controller = {
  create: async(req,res, next)=> { 
      try {
          const { chapter_id, text,commentable_id} = req.body
          console.log(req.user.id)
          let comment = await Comment.create({ chapter_id, user_id: req.user.id ,text,commentable_id })
       
          res.status(201).json({
              success: true,
              response: 'done',
              data: comment
          })
      } catch(error) {
          next(error)
      }
  }, 
  read: async (req,res, next) => {
    const {id} = req.params 
    console.log(req.query)
     let query = {chapter_id: id}
     let order = {createdAt: "desc"}
     let pagination = {
       limit: 5,
       page: 1
     }
     if(req.query.page){
       pagination.page = req.query.page
     }
   
     if(req.query.limit){
       pagination.limit = req.query.limit
     }

     if(req.query.commentable_type){
         query.chapter_id = req.query.commentable_type
      
     }

    try{
      let comment = await Comment.find(query).sort(order).limit(pagination.limit).skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit: 0
      )
      if(comment){
        res.status(200).json({
          succes: true,
          response: "done",
          data: comment
        })
        }
      }catch(error){
        console.log(error)
      next(error)
    }
  },
  update_comment : async(req, res, next) =>{
    try{
      const {text,commentable_id, chapter_id} = req.body
        await Comment.findOneAndDelete({text});
       res.status(200).json({
        success: true,
        response: 'done',
    })
    }catch(error){
      next(error)
    }
  }, 
  delete_comment: async(req,res,next) =>{
    try{
      const {text,commentable_id, chapter_id} = req.body
        await Comment.findOneAndDelete({text, commentable_id, chapter_id});
       res.status(200).json({
        success: true,
        response: 'done',
    })
    }catch(error){
      next(error)
    }

  }
  
}
export default controller

/* const controller = {
  create: async (req, res) => {

  },
  read: async (req, res) => {},
  one : async (req, res) => {},
  update: async (req, res) => {},
  destroy: async (req, res) => {},

  
}

export default controller */