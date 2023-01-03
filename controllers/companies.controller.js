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
    }
}


export default controller 