import Joi from 'joi-oid'

const schema = Joi.object({
    author_id: Joi.objectId().required().messages({
        'any.required': 'please put author id',
        'string.empty': 'please put author id'
    }),
    company_id: Joi.objectId(),
    title: Joi.string().min(1).messages({
        'any.required': 'please put title of manga or comic',
        'string.empty': 'please put title of manga or comic'
    }),
    photo: Joi.string().min(1).required().uri().messages({
        'any.required': 'please put an url image ',
        'string.empty': 'please put an url image ',
        'string.uri': 'please put an url'
    }),
    description: Joi.string().min(1).required().messages({
        'any.required': 'please put description of manga or comic',
        'string.empty': 'please put description of manga or comic'
    }),
    category: Joi.objectId().required().messages({
        'any.required': 'please put category id',
        'string.empty': 'please put category id'
    }) 
})

export default schema