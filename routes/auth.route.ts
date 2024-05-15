import express from "express";
import { deleteUser, getAllUsers, getUserById, registerUser, updateUser } from "../controllers/auth.controller";
import { registerDefinition } from "swaggiffy";
import { User } from "../models/user.model";
const authRoute = express.Router();
authRoute.get("/profile/:id",getUserById)
authRoute.get("/accounts/all",getAllUsers) 
authRoute.post("/signUp", registerUser);
authRoute.put("/profile/update/:id", updateUser);
authRoute.delete("/profile/delete/:id", deleteUser);
registerDefinition(authRoute,{tags:"User",mappedSchema:User,basePath:"/auth"})

export default authRoute;