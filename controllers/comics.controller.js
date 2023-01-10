import {Comic} from "../models/Comic.js"


const controller = {
    create: async (req, res, next) => {
        try {
            let comic =await Comic.create(req.body)
            res.status(201).json({
                success: true,
                response: 'done',
                new_comic: comic
            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller