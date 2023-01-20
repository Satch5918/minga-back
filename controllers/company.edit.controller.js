import {Company} from '../models/Company.js'

const companyEditController = {
    update: async (req,res,next) => {
        const companyInfo = req.body
        try{
            let result = await Company.findOneAndUpdate({id: companyInfo.id}, {$set: companyInfo});
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