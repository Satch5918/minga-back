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
    one: async(req, res, next) =>{
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
    },
    read: async(req, res, next) => {
        let query = {}
        let order = {}
        if(req.query.category){
            query = req.query.category
        }
        if (req.query.page){
            query = {
                ...query, 
                page: req.query.page
            }
        }
        if(req.query.order){
            order = {createdAt: req.query.order}
        }
        try{
            let all = await Company.find(query).sort(order)
            if(all){
                res.status(200).json({
                    succes: true,
                    response: all
                })
            }
        }catch(error){
            res.status(404).json({
                succes: false,
                response: "Not found"
            })

        }
    }
    
}


export default controller 