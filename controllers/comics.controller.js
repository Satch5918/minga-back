import {Comic} from "../models/Comic.js"
import defaultResponse from "../config/response.js"

const controller = {
    create: async (req, res) => {
        try {
            let comic =await Comic.create(req.body)
            req.body.success = true
            req.body.sc = 201 
            req.body.data = 'comic created'
            return defaultResponse(req,res)
        } catch (error) {
            next(error)
        }
    }
  }



export default controller;