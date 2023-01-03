import express from 'express'
let router = express.Router()


router.get('/', function(req, res, next){
    res.json({
        success: true,
        response: 'chapters'
    })
})

export default router