import defaultResponse from "../../minga-back/config/response.js"
import {Comment} from '../models/Comment.js'

async function is_AuthorOfComment(req, res, next){
    //passport me inyecto req.user con los datos del usuario autenticado
    //tengo que verificar que el id de este usuario coincide con el id del que creo el comentario
    let {id} = req.params // id del comentario que se quiere editar/eliminar 
    let comment = await Comment.findById(id) //comentario encontrado(con todas sus propiedades: user_id)
    if (req.user.id.equals(comment.user_id)){
        console.log(req.user)
        console.log(req.user.id)
        console.log(comment.user_id)
        return next()
    }
    req.body.success = false
    req.body.sc = 401
    req.body.data = 'you are not the original author'
    return defaultResponse(req,res)
}

export default is_AuthorOfComment