import mongoose from "mongoose";
import { initConfig } from "./config/init";

(async () => {
    try {
        mongoose.set('strictQuery', false)
        const db = await mongoose.connect(initConfig.MONGODB_URI);
        console.log("☁️ [database]: ", db.connection.name);
    } catch (error) {
        console.error("☁️ [database]: ", error);
    }
})()