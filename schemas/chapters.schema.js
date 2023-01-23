import Joi from "joi-oid"

export const schema = Joi.object({
    comic_id: Joi.objectId().required(),
    title: Joi.string().required().min(1).max(200).messages({
        "any.required":" The title is required, please enter data",
        "string.empty":" Enter your title",
        "string.min":" Minimun characters are 1",
        "string.max":" Maximun characters are 200"
}),
    pages: Joi.array().items(Joi.string().uri()).min(1).messages({
        "any.required":" Please enter an URL",
        "string.empty":" Please enter an URL"
    }),
    order: Joi.number().required().messages({
        "any.required":" Please enter the chapter number",
        "number.empty":" You need to enter a Chapter number"
    })
})

export const deleteChapter = Joi.object({
    comic_id: Joi.objectId().required(),
    title: Joi.string().required().min(1).max(200).messages({
        "any.required":" The title is required, please enter data",
        "string.empty":" Enter your title",
        "string.min":" Minimun characters are 1",
        "string.max":" Maximun characters are 200"
}),
order: Joi.number()



})

export const updateChapter = Joi.object({
    comic_id: Joi.objectId().required(),
    title: Joi.string().required().min(1).max(200).messages({
        "any.required": "Title is a required field",
        "string.empty": "Title cannot be an empty field",
        "string.min": "Title must have a minimum length of {#limit}",
        "string.max": "Title must have a maximum length of {#limit}",
        "string.base": "Title must be a type of 'text'",
    }),
    order: Joi.number().required,
})


