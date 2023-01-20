import { Author } from "../models/Author.js";
import jwtDecode from "jwt-decode";

const authorEditController = {
    update: async (req, res, next) => {
        const authorInfo = req.body;
        const token = req.headers.authorization.split(' ')[1]
        let decodedToken = jwtDecode(token).id
        console.log(decodedToken)
            try{
                let result = await Author.findOneAndUpdate({user_id: decodedToken}, {$set: authorInfo}, {new: true});
            return res.status(200).json({
                success: true,
                message: result
            });
            } catch(error){
              next(error)
            }
        }
}
export default authorEditController