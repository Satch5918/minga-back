import { Chapter } from "../models/Chapter.js";

const controllerChDetails = {
    get_comic_chapters:  async (req, res, next) => {
        let query = {comic_id: req.query.comic_id}
        let ordering = {order: "asc"}
        let pagination ={
            page : 1,
            limit: 5
        }
        if(req.query.page){
            pagination.page = req.query.page
        }
        if(req.query.limit){
            pagination.limit = req.query.limit
        }
        if(req.query.sort){
            ordering = {order: req.query.sort}
            }
        try{
            const chapters = await Chapter.find(query, '-_id')
            .sort(ordering)
            .skip(pagination.page > 0 ? ((pagination.page - 1) * pagination.limit) : 0)
            .limit(pagination.limit)
            res.status(200).json({
                success: true,
                response: chapters
            })
        }
        catch(error){
            next(error)
        }
        }
}

export default controllerChDetails