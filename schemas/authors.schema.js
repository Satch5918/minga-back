import Joi from 'joi-oid'

 export const schemaPost = Joi.object({
   name:Joi.string().min(3).max(20).required().messages({
      "any.required":"Please enter your name",
      "string.empty":"Please enter your name"
   }),
   last_name:Joi.string().min(3).max(20).messages({
      "any.required":"Please enter your last name",
      "string.empty":"Please enter your last name"
   }),
   city:Joi.string().min(3).max(20).required().messages({
      "any.required":"Please enter your city",
      "string.required":"Please enter your city"
   }),
   country:Joi.string().min(3).max(20).required().messages({
      "any.required":"Please enter your country",
      "string.empty":"Please enter your country"
   }),
   date: Joi.date().messages({
      "any.required":"Your date is empty, please enter your date",
      "number.empty":"Your date is empty, please enter your date"
   }),
   photo:Joi.string().uri().required().messages({
      "any.required":"Please enter your photo",
      "string.required":"Please enter your photo",
      "string.uri":"This field required an url, please enter an url with your photo"
   }),
   active: Joi.boolean().required()
})
export const schemaPut = Joi.object({
   name: Joi.string().min(3).max(20).required().messages({
      "any.required":"Please enter your name",
      "string.empty":"Please enter your name",
      "string.min":"Your name must have at least 3 letters",
      "string.max":"Your name must have a maximun 20 letters"
   }),
   last_name: Joi.string().min(3).max(20).messages({
      "any.required":"Please enter your last name",
      "string.empty":"Please enter your last name",
      "string.min":"Your last name must have at least 3 letters",
      "string.max":"Your last name must have a maximun 20 letters"
   }),
   city:Joi.string().min(3).max(20).messages({
      "any.required":"Please enter your city",
      "string.required":"Please enter your city",
      "string.min":"Your city must have at least 3 letters",
      "string.max":"Your city must have a maximun 20 letters"
   }),
   country:Joi.string().min(3).max(20).messages({
      "any.required":"Please enter your country",
      "string.empty":"Please enter your country",
      "string.min":"Your country must have at least 3 letters",
      "string.max":"Your country must have a maximun 20 letters"

   }),
   date: Joi.date().messages({
      "any.required":"Your date is empty, please enter your date",
      "number.empty":"Your date is empty, please enter your date"
   }),
   photo:Joi.string().uri().messages({
      "any.required":"Please enter your photo",
      "string.required":"Please enter your photo",
      "string.uri":"This field required an url, please enter an url with your photo"
   }),
   active: Joi.boolean()
})

