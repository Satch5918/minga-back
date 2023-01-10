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
    get_pages: async(req, res, next)=> {
        //con query
        let consultas = {}
        if (req.query.comic_id){
            consultas.comic_id = req.query.comic_id
        }
        if( req.query.order){
            consultas.order = req.query.order
        }
        try{ 
            const chapter = await Chapter.find(consultas)
            res.status(201).json({
                succes: true,
                response:  chapter})
        //Con params
/*         try{
            const {comic_id, order} = req.params
            const chapter = await Chapter.find({
                comic_id: comic_id,
                order: order
            }) 
            res.status(201).json({
                succes: true,
                response:  chapter
            }) */
        }catch(error){
            next(error)
        }
    },
}

export default controller;