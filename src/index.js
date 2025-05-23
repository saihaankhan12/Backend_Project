// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./DB/index.js";

dotenv.config({
    path: './env'
})

connectDB()



/*

import express from "express"
const app = express()

( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("error:",error);
        throw error
       })

       app.listen(process.env.PORT, () => {
           console.log(`App is listen on port ${process.env.PORT}`);
           
       })
    } catch (error) {
        console.error("ERROR : ",error)
        throw error
    }
})()

*/