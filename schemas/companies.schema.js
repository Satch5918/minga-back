import Joi from 'joi-oid'

const schemaPost = Joi.object({
    name: Joi.string().required().min(3).max(20).messages({
        "any.required":"Please enter the company name",
        "string.required":"Please enter the company name"
    }),
    logo: Joi.string().uri().required().min(8).messages({
        "any.required":"Please enter the company logo",
        "string.required":"Please enter the company logo",
        "string.uri":"The company logo must be an url"
    }),
    website: Joi.string().required().min(4).messages({
        "any.required":"Please enter your website",
        "string.required":"Please enter your website"
    }),
    description: Joi.string().required().min(8).max(200),
    active: Joi.boolean().required()
})

const schemaPut = Joi.object({
    name: Joi.string().min(3).max(20).messages({
        "any.required":"Please enter the company name",
        "string.required":"Please enter the company name"
    }),
    logo: Joi.string().uri().min(8).messages({
        "any.required":"Please enter the company logo",
        "string.required":"Please enter the company logo",
        "string.uri":"The company logo must be an url"
    }),
    website: Joi.string().min(4).messages({
        "any.required":"Please enter your website",
        "string.required":"Please enter your website"
    }),
    description: Joi.string().min(8).max(200),
    active: Joi.boolean()
})

const schemas = {schemaPost, schemaPut}

export default schemas