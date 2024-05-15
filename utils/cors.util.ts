const whitelist = [
    "http://localhost:3000",
    "http://localhost:5000",
    "http://localhost:8000",
    "::ffff:127.0.0.1"];
const options = {
    // origin: (origin: string, callback: Function) => {
    //     if (whitelist.indexOf(origin) !== -1) {
    //         callback(null, true);
    //     } else {
    //         console.log(origin)
    //         callback(new Error("Not allowed by CORS"));

    //     }
    // },

    origin: "*",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    credentials: true,
    exposedHeaders: ["*", "Authorization"]
};

export default options;