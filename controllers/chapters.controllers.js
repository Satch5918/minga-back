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
}

export default controller;