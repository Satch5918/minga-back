import { Author } from "../models/data/author.js";

const controller = {
    create:async(req, res)=>{
        try{
            const {name,lastname,city,country,date,photo,user_id,useractive}= req.body
            await Author.create({name,lastname,city,country,date,photo,user_id,useractive})
            res.status(201).json({
                success:true,
                response:'done',
                new_Author: Author
            })
        }catch(error){
            console.log(error);
            }
        }
    }
        export default controller
    