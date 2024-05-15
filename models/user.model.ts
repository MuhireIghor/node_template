import { DataTypes } from "sequelize";
import dataBaseConfig from "../config/database.config";
import { Laptop } from "./laptop.model";
import { Schema, registerSchema } from "swaggiffy";
const jwt = require("jsonwebtoken");
export const User = dataBaseConfig.define("User", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: {
                msg: "Password must be at least 5 characters",
                args: [5]
            }
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nationality: {
        type: DataTypes.STRING
    },
    telephone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    department: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING,
    },


});
User.hasMany(Laptop, {
    foreignKey: {
        allowNull: false,
    }
});
Laptop.belongsTo(User);
registerSchema("User", 'User');

(
    async () => {
        try {
            console.log("Generating table")
            await User.sync({ force:true });

        }
        catch (err) {
            console.log("Error while creating User table", err)
        }
    }
)();
(User.prototype as any).generateAuthToken = function () {

    const token = jwt.sign({
        id: this.id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        department: this.department,
        position: this.position,
    },)
    return token;


};



