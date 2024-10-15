import Joi from "joi";

export const roversSchema = Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().required(),
    apiKey: Joi.string().required(),
})