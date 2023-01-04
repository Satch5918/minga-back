import Joi from 'joi-oid'

const schema = Joi.object({
    comic_id: Joi.objectId().required(),
    title: Joi.string().required().min(1),
    pages: Joi.array().items(Joi.string().uri()).required(),
    order: Joi.number().required().min(1)
})

export default schema