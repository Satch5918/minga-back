import Joi from 'joi-oid'

const schema = Joi.object({
    author_id: Joi.objectId().required().messages({
        'any.required': 'AUTHOR_ID_REQUIRED',
        'string.empty': 'AUTHOR_ID_REQUIRED'
    }),
    company_id: Joi.objectId(),
    title: Joi.string().min(1).required().messages({
        'any.required': 'TITLE_REQUIRED',
        'string.empty': 'TITLE_REQUIRED'
    }),
    photo: Joi.string().min(1).required().uri().messages({
        'any.required': 'IMG_REQUIRED',
        'string.empty': 'IMG_REQUIRED',
        'string.uri': 'INVALID_URL'
    }),
    description: Joi.string().min(1).required().messages({
        'any.required': 'DESCRIPTION_REQUIRED',
        'string.empty': 'DESCRIPTION_REQUIRED'
    }),
    category: Joi.objectId().required().messages({
        'any.required': 'CATEGORY_ID_REQUIRED',
        'string.empty': 'CATEGORY_ID_REQUIRED'
    }) 
})

export default schema