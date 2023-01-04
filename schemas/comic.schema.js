import Joi from 'joi-oid'

const schema = Joi.object({
    author_id: Joi.objectId().required(),
    company_id: Joi.objectId(),
    title: Joi.string().required(),
    photo: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.objectId().required() 
})

export default schema