import mongoose from "mongoose";

 export const ConnectDB= async()=>{
  await mongoose.connect('mongodb+srv://sanchittanwer:myblog@30@cluster0.2mbz2.mongodb.net/blog-app');
  console.log("DB connected");
}