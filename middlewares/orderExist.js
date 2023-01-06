import { Chapter } from '../models/Chapter.js'
import defaultResponse from '../config/response.js'

/*
- si ORDER es nulo en BODY
- busco el order del ultimo Chapter
    - le sumo 1
    - agrego la propiedad ORDER al BODY
    - y luego dejo pasar

-si ORDER no es nulo (es decir el usuario me manda order=5 por ejemplo)
    - si orden existe no lo dejo pasar
    - si orden no existe lo dejo pasar
*/

async function orderExists(req,res,next) {
    let { order } = req.body
    if (order === "") {
        let chapter = await Chapter.find() //busco TODOS los capitos
                    .sort({ order: '-1'}) // -1 para ordenar por la propiedad order de mayor a menor
                    //.sort({ title: '1'}) //1 para ordenar por la propiedad title de menor a mayor
                    .limit(1) //traigo el primero
                    //ACLARACION find me trae SIEMPRE un ARRAY
        //AHORA CHAPTER ES UN ARRAY CON UN OBJETO QUE ES EL QUE TIENE EL ULTIMO ORDER        
        let nextOrder = chapter[0].order+1 //traigo el orden del ultimo y sumo 1
        req.body.order = nextOrder //reasigno el valor del nuevo orden (el siguiente)
        return next()
   }
   let foundChapter = await Chapter.findOne( {order} )
   if (foundChapter) {
        req.body.success = false
        req.body.sc = 400
        req.body.data = 'order exists'
        return defaultResponse(req,res)
   }
   return next()
}

export default orderExists