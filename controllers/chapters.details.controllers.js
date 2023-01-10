import { Chapter } from "../models/Chapter.js";

const controllerChDetails = {
    get_comic_chapters:  async (req, res, next) => {
        let consultas = {}
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

export default controllerChDetails