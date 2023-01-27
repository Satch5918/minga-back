import { Author } from "../models/Author.js";


const controller = {
    create:async(req, res, next)=>{
        try{
            const {name,last_name,city,country,date,photo}= req.body
            let active= true;
            await Author.create({name,last_name,city,country,date,photo,user_id: req.user.id,active})
            res.status(201).json({
                success:true,
                response:'done',
            })
        }catch(error){
            next(error);
            }
        },
    
    }
        export default controller
    