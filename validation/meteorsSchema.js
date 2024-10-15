import Joi from "joi";

export const meteorsSchema = Joi.object().keys({
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    count: Joi.boolean().optional(),
    wereDangerousMeteors: Joi.boolean().optional()
})