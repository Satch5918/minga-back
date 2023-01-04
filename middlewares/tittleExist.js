import { Comic } from '../models/Comic.js'
import defaultResponse from '../config/response.js'

async function tittleExist(req,res,next){
    const comic = await Comic.findOne({title: req.body.title})
    if(comic){
        res.status(400).json({
            success: false,
            response: 'This comic already exists'
        })

    }
    return next()

}

export default tittleExist