import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
//import cors from "cors"
import cors from "cors";

mongoose.set('strictQuery','true')


const app = express();
dotenv.config();
const port=process.env.PORT ||8800;

const connect= async () =>{
    // aaaaa
try {
    await mongoose.connect(process.env.MONGO)
  console.log("connected to mongoDB")
  } catch (error) {
//      throw error;
   }
};





mongoose.connection.on("disconected",()=>{
    console.log("mongoDB disconnected")
})



// middlewares......
const corsOptions ={
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));





app.use(cookieParser())

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next) => {
    const errStatus= err.status || 500
    const errMessage= err.message ||"something went wrong..!"
    return res.status(errStatus).json({
    
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack,



    });
});



app.listen(port,()=>{
    connect()
console.log(`connected to backend....`);
})
