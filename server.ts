import express, { Request, Response } from "express";
import cors from "cors"
import { Swaggiffy } from "swaggiffy";
import "./config/database.config";
import options from "./utils/cors.util";
import authRoute from "./routes/auth.route";
import laptopRoutes from "./routes/laptops.route";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors(options))
app.use(express.json());
app.use("/auth", authRoute);
app.use("/laptops",laptopRoutes)

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Welcon to our apis",
        ip: req.ip
    })
})
app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
})
new Swaggiffy().setupExpress(app).swaggiffy();
// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
// 
// const swaggerDefinition = {
    // openapi: "3.0.0",
    // info: {
        // title: "NE TEMPLATE API",
        // version: "1.0.0",
        // description: "This is a sample swagger documentation for the national exam template",
        // license: {
            // name: 'Licensed Under MIT',
            // url: 'https://spdx.org/licenses/MIT.html',
        // },
        // contact: {
            // name: 'JSONPlaceholder',
            // url: 'https://jsonplaceholder.typicode.com',
        // },
    // },
    // servers: [
        // {
            // url: "http://localhost:8000",
            // description: "Development Server"
        // }
    // ]
// }
// const swaggerConfigOptions = {
    // swaggerDefinition,
    // apis: [
        // "./routes/auth.route.ts"
    // ]
// }
// 
// const swaggerSpec = swaggerJSDoc(swaggerConfigOptions);
