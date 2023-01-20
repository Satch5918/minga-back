import {Chapter}  from '../models/Chapter.js'

const controller = {
    create: async(req, res, next) => {
        try{
            const { comic_id, title, pages, order } = req.body
            await Chapter.create({comic_id, title, pages, order})
            res.status(201).json({
            success: true,
            response: 'Done'
          })
        }
        catch(error){
            next(error)
        }    
    },
    get_pages: async (req, res, next) => {
        const { _id } = req.params
        try {
          const comic = await Chapter.findById(_id)
          console.log(comic)
          res.status(200).json({
            success: true,
            response: comic
          })
        }catch (error) {
          next(error)
        }
    },
    update: async (req, res, next) => {
      try {
          const { id } = req.params
          let chapter = await Chapter.findOneAndUpdate(
              { _id: id },
              req.body,
              { new: true }
          )
          res.status(200).json({
              success: true,
              response: chapter
          })
      }
      catch (err) {
          next(err)
      }
  },
  destroy: async (req, res, next) => {
    try {
        const { id } = req.params
        await Chapter.findOneAndDelete(
            { _id : id} 
            )
        res.status(200).json({
            success: true,
            response: "deleted"
        })
    }
    catch (err) {
        next(err)
    }
},
}

export default controller;
