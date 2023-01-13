import express from "express"
import { Comic }  from "../models/Comic.js"

const controllerCompany = {
    get_comics_from_cia: async(req, res, next) => {
        let query = {}
        let order = {}
        let pagination = {
            limit: 5,
            page: 1
        }
        
        if(req.query.category){
            query = {
              ...query, 
              category: req.query.category
            }
        }
        if(req.query.company_id){
            query = {
                ... query,
                company_id: req.query.company_id
            }
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
        if(req.query.page){
            pagination.page = req.query.page
        }
        if(req.query.limit){
            pagination.limit = req.query.limit
        }
    
        try{
            let all = await Comic
            .find(query, 'title photo description category createdAt updatedAt -_id')
            .sort(order)
            .limit(pagination.limit)
            .skip(pagination.page > 0 ? ((pagination.page - 1) * pagination.limit) : 0)
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