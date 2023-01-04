import Joi from 'joi-oid'

const schema = Joi.object({
    chapter_id: Joi.objectId().required(),
    user_id: Joi.objectId().required(),
   text: Joi.string().min(1).max(200).required(),
   commentable_id:Joi.objectId() 
})

export default schema