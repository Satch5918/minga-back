import Joi from 'joi-oid'

const schema = Joi.object({
   name:Joi.string().min(1).max(20).required(),
   last_name:Joi.string().min(1).max(20),
   city:Joi.string().min(1).max(20).required(),
   country:Joi.string().min(1).max(20).required(),
   date: Joi.date(),
   photo:Joi.string().uri().required(),
})

export default schema
