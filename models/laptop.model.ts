import { DataTypes } from "sequelize";
import dataBaseConfig from "../config/database.config";

export const Laptop = dataBaseConfig.define('Laptop', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelName: {
        type: DataTypes.STRING,
        allowNull: false
    }

},
    {
        tableName: "Laptop"
    });

(async () => {
    try {
        await Laptop.sync();
    }
    catch (err) {
        console.log("Error in Laptop table creation", err)
    }
})()



