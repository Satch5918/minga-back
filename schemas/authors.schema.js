import Joi from 'joi-oid'

const schema = Joi.object({
   name:Joi.string().min(1).max(20).required(),
   last_name:Joi.string().min(1).max(20),
   city:Joi.string().min(1).max(20).required(),
   country:Joi.string().min(1).max(20).required(),
   date: Joi.date().min(8),
   photo:Joi.string().required(),
   user_id:Joi.objectId().required(),
   useractive:Joi.boolean().required()
})

export default schema