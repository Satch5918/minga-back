import { Author } from "../models/Author.model.js";
import { Chapter } from "../models/Chapter.model.js";
import { Comic } from "../models/Comic.model.js";
import defaultResponse from "../config/response.js";

export const verifyAuthor = async (req, res, next) => {
    // este es el usuario/autor  que viene logueado 
    const  user_id  = console.log(req.user.id) 

    //aca vamos a a popular chapter con comic_id para encontrar el puto id del autor recieen

    const { comic_id } = req.body
    let chapter = await Chapter.find({comic_id})
    .populate("comic_id")
    console.log(chapter) 
}