import Joi from 'joi-oid'

const schema = Joi.object({
   name:Joi.string().min(1).max(20).required().messages({
      "any.required":"Please enter your name",
      "string.empty":"Please enter your name"
   }),
   last_name:Joi.string().min(1).max(20).messages({
      "any.required":"Please enter your last name",
      "string.empty":"Please enter your last name"
   }),
   city:Joi.string().min(1).max(20).required().messages({
      "any.required":"Please enter your city",
      "string.required":"Please enter your city"
   }),
   country:Joi.string().min(1).max(20).required().messages({
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

export default schema
