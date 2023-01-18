import { Category } from '../models/Category.js'
import { User } from '../models/User.js'
import defaultResponse from '../config/response.js'


const controller = {
    
    create: async(req,res,next)=> { 
        try { 
                    await Category.create(req.body)
            req.body.success = true
            req.body.sc = 201
            req.body.data = 'created'
            return defaultResponse(req,res)
        } catch(error) { 
            next(error)
        }
    },
    
    read: async(req,res,next)=> {

        //REQ ES UN OBJETO CON TOOOOOOODOS LOS REQUERIMIENTOS PARA PODER REALIZAR LA OPERACION
        //REQ.BODY
        //REQ.PARAMS
        //REQ.QUERY
        console.log(req.query) //para ver todas las consultas que vienen en la peticion
        let consultasParaFiltrar = {} //se pasa adentro del metodo que busca
       
        
        if (req.query.name) {
            //consultasParaFiltrar.name = req.query.name.split(',') //para "cortar" un array de datos
            consultasParaFiltrar.name = {"$regex": req.query.name, $options: 'i'} //expresion para incluir "palabras" a la busqueda
        }
        if (req.query.ranking) {
            consultasParaFiltrar.ranking = Number(req.query.ranking)
        }
        
       
        try {
            let all = await Category.find(consultasParaFiltrar)
                        .sort({name: "asc"}

            if (all) {
                req.body.success = true
                req.body.sc =200
                req.body.data = all
                return defaultResponse (req, res)
            } else {
                req.body.success = false
                req.body.sc = 400
                req.body.data = 'not found' 
                return defaultResponse(req,res)
            }
        } catch (error) {
            next(error)
        }
        
    }

}

export default controller