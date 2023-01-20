import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        "any.required":"Please enter the company name",
        "string.required":"Please enter the company name"
    }),
    logo: joi.string().uri().required().min(8).messages({
        "any.required":"Please enter the company logo",
        "string.required":"Please enter the company logo",
        "string.uri":"The company logo must be an url"
    }),
    website: joi.string().required().min(4).messages({
        "any.required":"Please enter your website",
        "string.required":"Please enter your website"
    }),
    description: joi.string().required().min(8).max(200),
    active: joi.boolean().required()
})

export default schema