import { query } from 'express'
import  {Comment}  from '../models/Comment.js'


const controller = {
  create: async(req,res, next)=> { 

    let query = {}
    let order = {createdAt: "des"}
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

    if(req.query.chapter){
      query = {
        ... query,
        commentable_type: req.query.chapter
      }

    }
      try {
          const { chapter_id, text,commentable_id } = req.body
          await Comment.create({ chapter_id, user_id: req.user.id ,text,commentable_id })
       
          res.status(201).json({
              success: true,
              response: 'done',
          })
      } catch(error) {
          next(error)
      }
  }, 
  // get_comment_from_comment : async(req, res, next) => {
  //   let query = {}
  //   let order = {createdAt: "des"}
  //   let pagination = {
  //     limit: 3,
  //     page: 1
  //   }  

  //   if(req.query.limit){
  //     pagination.limit = req.query.limit
  //   }

  //   if(req.query.id){
  //     query = {
  //       ...query,
  //       commentable_type: req.query.id
  //     }
  //   }

  //   if(req.query.page){
  //     pagination.page = req.query.page
  //   }

  // }, 
  update_comment : async(req, res, next) =>{
    try{
      const {text,commentable_id, chapter_id} = req.body
        await Comment.findOneAndUpdate({text, commentable_id, chapter_id});
       res.status(201).json({
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
        await Comment.remove({text, commentable_id, chapter_id});
       res.status(201).json({
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