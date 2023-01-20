import { Author } from "../models/Author.js";

const authorEditController = {
    update: async (req, res, next) => {
        const authorInfo = req.body;
        console.log(req.user)
            try{
                let result = await Author.findOneAndUpdate({user_id: req.user.id}, {$set: authorInfo}, {new: true});
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