import Joi from "joi";
import { emailRegex } from "../utils/patterns";

const userSchema = Joi.object({
    firstName: Joi.string().required().min(6),
    lastName: Joi.string().required().min(6),
    nationality: Joi.string().required(),
    telephone: Joi.string().required(),
    email: Joi.string().email().pattern(emailRegex),
    department: Joi.string().required(),
    position: Joi.string().required(),
    laptopManufacturer: Joi.string().required(),
    model: Joi.string().required(),
    serialNumber: Joi.string().required(),
    password: Joi.string().required().min(5),

})
export const validateUserRegistration = (payload: any) => {
    return userSchema.validate(payload)
}