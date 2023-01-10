import { Comic } from "../models/Comic.js";

const controllerDetails = {
    get_comic: async (req, res, next) => {
        try{
            const {id} = req.params
            let comic = await Comic.findById(id)
            if (comic){
                res.status(200).json({
                    success: true,
                    response: comic
                })
            }else{
                res.status(400).json({
                    success: false,
                    response: "comic not found"
                })
            }
        }
        catch(error){
            next(error)
        }
    }
}

export default controllerDetails