import express from "express"
import { Company }  from "../models/Company.js"

const controller = {
    create: async(req, res, next)=> {
        try{
            let active = true
            const { name,logo,website,description,user_id } = req.body
            await Company.create({ name,logo,website,description,user_id, active})
            res.status(201).json({
                succes: true, 
                response: "done",
                
            })
        }catch(error){
            next(error);
        }
    },
    get_company: async(req, res, next) =>{
        try{
            let {id}= req.params //Capturo el id que viene por params del requerimiento
            let one = await Company.findOne({_id : id}) //Con ese id busco una empresa
            if(one){ // Si la variable one es una empresa (porque encuentra una empresa)
                res.status(200).json({ //Le mando al cliente los datos de esa empresa 
                    succes: true, 
                    response: one
                })
            }else{
                res.status(404).json({
                    succes: false,
                    response: "Not found"
                })
            }

        }catch(error){
            next(error)
        }
    }
    
}


export default controller 