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
    get_comic_chapters:  async (req, res, next) => {
        let consultas = {
            comic_id : req.query.comic_id
        }
        let ordenamineto = {}
        let paginacion ={
            page : 1,
            limit: 5
        }
        if(req.query.page){
            paginacion.page = req.query.page
        }
        if(req.query.limit){
            paginacion.limit = req.query.limit
        }
        if(req.query.sort){
            ordenamineto = {order : req.query.sort}
            }
        try{
            const chapters = await Chapter.find(consultas)
            .sort(ordenamineto)
            .skip(paginacion.page > 0 ? ((paginacion.page - 1) * paginacion.limit) : 0)
            .limit(paginacion.limit)
            res.status(200).json({
                success: true,
                response: chapters
            })
        }
        catch(error){
            console.log(error)
        }
        }
    }


export default controller