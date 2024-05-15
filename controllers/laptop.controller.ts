import { Request, Response } from "express"
import ApiResponse from "../utils/ApiResponse"
import { Laptop } from "../models/laptop.model"

export const registerNewLaptop = async (req: Request, res: Response) => {
    try {
        const user = await Laptop.create(req.body)
    }
    catch (err) {
        return res.status(201).json(ApiResponse.error("Laptop created successfully", null))
    }

}
export const updateLaptopById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        const laptopToupdate = await Laptop.findByPk(id);
        if (!laptopToupdate) {
            return res.status(404).json(ApiResponse.error("Laptop not found", null))
        }
        await laptopToupdate.update(req.body);
        return res.status(200).json(ApiResponse.success("Laptop updated successfully", laptopToupdate))
    }
    catch (err) {
        return res.status(500).json(ApiResponse.error("Laptop updating went wrong", null))
    }
}
export const deleteLaptopById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const laptopToDelete = await Laptop.findByPk(id);
        if (!laptopToDelete) {
            return res.status(404).json(ApiResponse.error("Laptop not found", null))
        }
        const deletedLaptop = await laptopToDelete.destroy();
        return res.status(200).json(ApiResponse.success("Laptop deleted successfully", deletedLaptop))
    }
    catch (err) {
        return res.status(500).json(ApiResponse.error("Laptop deleting went wrong", null))
    }
}
export const getLaptopById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const laptopToGet = await Laptop.findByPk(id);
        if (!laptopToGet) {
            return res.status(404).json(ApiResponse.error("Laptop not found", null))
        }
        return res.status(200).json(ApiResponse.success("Laptop found successfully", laptopToGet))

    }
    catch (err) {
        return res.status(500).json(ApiResponse.error("Laptop retrieving went wrong", null))
    }
}
export const getAllLaptops = async (req: Request, res: Response) => {
    try {
        const foundLaptops = await Laptop.findAll();
        if (foundLaptops.length == 0) {
            return res.status(204).json(ApiResponse.success("No laptop found", foundLaptops))
        }
        return res.status(200).json(ApiResponse.success("Laptops fetched successfully", foundLaptops))

    }
    catch (err) {
        return res.status(500).json(ApiResponse.error("Laptop retrieving went wrong", null))
    }
}