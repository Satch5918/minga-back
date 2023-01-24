import defaultResponse from "../config/response.js";
import { Comic } from "../models/Comic.js";
import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";


export const verifyAoC = async(req,res,next) => {
    let user = req.user.id
    let { id } = req.params 
    
    let  comic = await Comic.findById(id).populate("company_id").populate("author_id")
    let author_user_id = comic.author_id?.user_id 
    let company_user_id = comic.company_id?.user_id

    if (user.equals(author_user_id) || user.equals(company_user_id) ){
        req.user.author_id = author_user_id
        req.user.company_id = company_user_id
        return next()
    }
    else{
        res.status(404).json({
            success: false,
            response: 'not found'
        })
    }
}