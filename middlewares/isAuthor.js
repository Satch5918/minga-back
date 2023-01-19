// middleware para checkear si el usuario es author

import defaultResponse from "../../minga-back/config/response.js"

async function isAuthor(req,res,next) {
    // aca el middlewar checkea si es author
    if (req.user.is_author) {
        return next()
    }
    req.body.success = false
    req.body.sc = 401
    req.body.data = 'you are not allowed'
    return defaultResponse(req,res)
}

export default  isAuthor