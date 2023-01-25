import {Company} from '../models/Company.js'

const companyEditController = {
    update: async (req,res,next) => {
        const companyInfo = req.body
        console.log(req.user.id)
        try{
            let result = await Company.findOneAndUpdate({user_id: req.user.id}, {$set: companyInfo}, {new: true});
        return res.status(200).json({
            success: true,
            message: result
        })
        }
        catch(error){
            next(error)
        }
    }
}

export default companyEditController
