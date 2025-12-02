import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n Mongodb connected ! DB HOST: ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("MongoDB Connection Failed: ", error);
        process.exit(1)
        
    }
}

export default connectDB





































































// ;(async ()=>{
//    try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error)=>{
//         console.log("error app cant connect",error);
        
//     })
//     app.listen(process.env.PORT, ()=>{
//         console.log(`app is running at port ${process.env.PORT}/`);
        
//     })
//    } catch (error) {
//     console.log(error);
    
//    }
// })()