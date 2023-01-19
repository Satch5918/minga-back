import Joi from 'joi-oid'

const schema = Joi.object({
    chapter_id: Joi.objectId().required(),
    // user_id: Joi.objectId().required(), como esto ya no se envia mas por formulario, ya que lo inyecta el passpor, entonces lo saco del schema validator.
    text: Joi.string().min(1).max(200).required(),
    commentable_id:Joi.objectId() 
})

export default schema