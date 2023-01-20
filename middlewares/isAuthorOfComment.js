import defaultResponse from "../../minga-back/config/response.js"

async function is_AuthorOfComment(req, res, next){
    if(req.user.is_AuthorOfComment){
        return next()
    }
    req.body.success = false
    req.body.sc = 401
    req.body.data = 'you are not the original author'
    return defaultResponse(req,res)
}

export default is_AuthorOfComment