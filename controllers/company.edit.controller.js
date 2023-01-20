import {Company} from '../models/Company.js'
import jwtDecode from 'jwt-decode'

const companyEditController = {
    update: async (req,res,next) => {
        const companyInfo = req.body
        const token = req.headers.authorization.split(' ')[1]
        let decodedToken = jwtDecode(token).id
        console.log(decodedToken)
        try{
            let result = await Company.findOneAndUpdate({user_id: decodedToken}, {$set: companyInfo}, {new: true});
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