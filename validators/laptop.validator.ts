import Joi from "joi";
import { ILaptopDto } from "../types";

export const laptopSchema = Joi.object({
    manufacturer: Joi.string().required(),
    modelName: Joi.string().required(),
})
export const validateLaptopSchema = (payload: ILaptopDto) => {
    return laptopSchema.validate(payload);
}