import defaultResponse from "../config/response.js"

async function isCompany(req,res,next) {
    if (req.user.is_company) {
        return next()
    }
    req.body.success = false
    req.body.sc = 401
    req.body.data = 'You are not a company'
    return defaultResponse(req,res)
}

export default  isCompany