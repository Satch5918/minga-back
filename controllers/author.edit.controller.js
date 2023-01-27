import { Author } from "../models/Author.js";

const authorEditController = {
    update: async (req, res, next) => {
        const authorInfo = req.body;
        console.log(req.user)
            try{
                let result = await Author.findOneAndUpdate({user_id: req.user.id}, {$set: authorInfo}, {new: true});
                console.log(result);
                if(result){
                    return res.status(200).json({
                        success: true,
                        message: 'Updated'
                    });
                }else{
                    return res.status(404).json({
                        success: false,
                        message: 'Not found'
                      })
                }

            } catch(error){
                return res.status(400).json({
                    success: false,
                    message: error
                  })
            }
        }
}
export default authorEditController