import mongoose from "mongoose";
import config from "../serverConfig.js";

const MONGODB_URL = config.MONGODB_URL

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("MONGODB Connected")
    } catch (error) {
        console.log("MONGODB Connection failed")
    }
}

export default connectToDB;