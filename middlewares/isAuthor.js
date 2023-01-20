import defaultResponse from "../../minga-back/config/response.js"

async function isAuthor(req,res,next) {
    if (req.user.is_author) {
        return next()
    }
    req.body.success = false
    req.body.sc = 401
    req.body.data = 'You are not an author'
    return defaultResponse(req,res)
}

export default  isAuthor