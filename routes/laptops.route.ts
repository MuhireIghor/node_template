import express from 'express';
import { deleteLaptopById, getAllLaptops, getLaptopById, registerNewLaptop, updateLaptopById } from '../controllers/laptop.controller';
const laptopRoutes = express.Router();
laptopRoutes.get('/', getAllLaptops);
laptopRoutes.get("/:id", getLaptopById);
laptopRoutes.post("/create", registerNewLaptop);
laptopRoutes.delete("/delete/:id", deleteLaptopById);
laptopRoutes.put("/update/:id", updateLaptopById);
export default laptopRoutes;