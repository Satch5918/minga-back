import { Comic } from "../models/Comic.js";
import defaultResponse from "../config/response.js";
import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";
import {User} from '../models/User.js'

const controller2 ={
myComics: async(req,res, next) => { 
        console.log(req.user);
            try{
                let filter = {}
                let comics;
                if(req.user.is_author){
                    let author = await Author.findOne({user_id: req.user.id})
                    filter.author_id = author._id
                    if(req.query.category_id){
                        filter.category_id = req.query.category_id
                    }
                    comics = await Comic.find(filter)
                }
                if(req.user.is_company){
                    let company = await Company.findOne({user_id: req.user.id})
                    filter.company_id = company._id
                    if(req.query.category_id){
                        filter.category_id = req.query.category_id
                    }
                    comics = await Comic.find(filter)
                }
            if(comics){
            res.status(200).json({
            succes:true,
            response: comics
        })}else{
            res.status(404).json({
                succes: false,
                message: "Comic not found."
            })
        }
    }catch(error){
        next(error);
        
    }},
    update: async(req,res,next)=>{
        try{
        const { id }= req.params;
        let comic = await Comic.findByIdAndUpdate(
        req.body,
        { new: true });
        res.status(200).json({
            succes:true,
            response: "Updated"
        })
        }catch(error){
            console.log(error);
        }
    },
    destroy: async(req, res) =>{

        try{
            const { id }= req.params;
            await Comic.findByIdAndDelete(
                { _id:id }
    
            )
            res.status(200).json({
                succes:true,
                response: "sc:200, deleted"
            })
        }catch(error){
            console.log(req.id);
            console.log(req.user);
            console.log(error);
        }
    }
}

export default controller2;