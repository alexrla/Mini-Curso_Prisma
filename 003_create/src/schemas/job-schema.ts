import Joi from "joi";

export const JobSchema = Joi.object({
  title: Joi.string().required(),
  salary: Joi.number().required(),
  skills: Joi.string().required(),
  isRemote: Joi.boolean().required(),
  until: Joi.string()
});
