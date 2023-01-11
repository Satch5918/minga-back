import express from "express"
import { Company }  from "../models/Company.js"

const controllerCompany = {
    get_comics_from_cia: async(req, res, next) => {
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

export default controllerCompany