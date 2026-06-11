import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionValue = await mongoose.connect
        (`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`connected to db // db host : ${connectionValue.connection.host}`);
    }
    catch(error){
        console.log("Error connecting to database", error);
        process.exit(1);
    }
};

export default connectDB;
