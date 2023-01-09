import { Comic } from '../models/Comic.js'
import defaultResponse from '../config/response.js'

async function tittleExist(req,res,next){
    const comic = await Comic.findOne({title: req.body.title})
    if(comic){
        req.body.success = false
        req.body.sc = 400
        req.body.data = 'title in use'
        return defaultResponse(req,res)

    }
    return next()

}

export default tittleExist