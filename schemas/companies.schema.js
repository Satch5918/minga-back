import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().required().min(3).max(20),
    logo: joi.string().uri().required().min(8),
    website: joi.string().required().min(4),
    description: joi.string().required().min(8).max(100),
    active: joi.boolean().required()
})

export default schema