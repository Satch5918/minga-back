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
}


export default controller