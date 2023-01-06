import {Comic} from "../models/Comic.js"


const controller = {
    create: async (req, res, next) => {
        try {
            const {author_id,company_id,title,photo,description,category} = req.body
            let comic =await Comic.create({author_id,company_id,title,photo,description,category})
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