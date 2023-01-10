import { Chapter } from "../models/Chapter.js";

const controller = {
    read: async(req, res, next) => {
        try{
           const { comic_id, title, pages, order } = req.body
           await Chapter.read({comic_id, title, pages, order})
           res.status(201).json({
            success: true,
            response: 'Done'
           })
        }
        catch(error){
            next(error)
        }
    }
}

export default controller