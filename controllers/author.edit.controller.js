import { Author } from "../models/Author.js";

const authorEditController = {
    update: async (req, res, next) => {
        const authorInfo = req.body;
            try{
                let result = await Author.findOneAndUpdate({id: authorInfo.id}, {$set: authorInfo});
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