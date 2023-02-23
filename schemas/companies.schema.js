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
})

const schemaPut = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        "any.required":"Please enter the company name",
        "string.required":"Please enter the company name",
        "string.min":"Your name must have at least 3 letters",
        "string.max":"Your name must have a maximun 20 letters"
    }),
    logo: Joi.string().uri().min(8).messages({
        "any.required":"Please enter the company logo",
        "string.required":"Please enter the company logo",
        "string.uri":"The company logo must be an url",
        "string.min":"Your logo must have at least 8 letters",
    }),
    website: Joi.string().min(4).messages({
        "any.required":"Please enter your website",
        "string.required":"Please enter your website",
        "string.min":"Your website must have at least 4 letters",
    }),
    description: Joi.string().min(8).max(200).messages({
        "any.required":"Please enter your description",
        "string.required":"Please enter your description",
        "string.min":"Your description must have at least 8 letters",
        "string.max":"Your description must have a maximun 200 letters"
    }),
    active: Joi.boolean()
})

const schemas = {schemaPost, schemaPut}

export default schemas