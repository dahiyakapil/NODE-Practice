import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected Successfully || ${connection.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};


export default connectDB;