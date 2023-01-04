import Joi from 'joi-oid'

const schema = Joi.object({
    author_id: Joi.objectId().required(),
    company_id: Joi.objectId(),
    title: Joi.string().min(1).required(),
    photo: Joi.string().min(1).required(),
    description: Joi.string().min(1).required(),
    category: Joi.objectId().required() 
})

export default schema