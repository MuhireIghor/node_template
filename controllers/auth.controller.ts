import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { validateUserRegistration } from "../validators/user.validator";
import { User } from "../models/user.model";
import { hashPassword } from "../utils/core.utils";

export const registerUser = async (req: Request, res: Response) => {
    const { error } = validateUserRegistration(req.body)
    if (error) {
        return res.status(400).json(ApiResponse.error(error.details[0].message, null))
    }
    try {
        const { password, ...payload } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = await User.create({ password: hashedPassword, ...payload });
        return res.status(200).json(ApiResponse.success("User created Successfully", user))

    }
    catch (err) {
        return res.status(500).json(ApiResponse.error("Server Error while creating User", (err as unknown as any).message))
    }
}
export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json(ApiResponse.error("User not found", null))
        }
        await user.update(req.body);
        return res.status(200).json(ApiResponse.success("User updated Successfully", user))

    }
    catch (err) {
        return res.status(500).json(ApiResponse.error("[Auth]:error while updating User", null))
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userToDelete = await User.findByPk(id);
        if (!userToDelete) {
            return res.status(404).json(ApiResponse.error("User not found", null))
        }
        const deletedUser = await userToDelete.destroy();
        return res.status(200).json(ApiResponse.success("User deleted Successfully", deletedUser))

    }
    catch (err) {

    }
}
export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json(ApiResponse.error("User not found", null))
        }
        return res.status(200).json(ApiResponse.success("User found Successfully", user))
    }
    catch (err) {
        return res.status(500).json(ApiResponse.error(`Error while querying user`, null));
    }

}
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        if (users.length == 0) {
            return res.status(204).json(ApiResponse.success("No user found", users))
        }
        return res.status(200).json(ApiResponse.success("Users fetched successfully", users))

    }
    catch (err) {
        return res.status(500).json(ApiResponse.error(`Error while querying user`, null));
    }
}