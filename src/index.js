import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDb.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import fileRouter from "./routes/fileRoutes.js";


const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

console.log(process.env.NODE_ENV);


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed ", error);
  });


  //Routers
  app.use("/api/v1/auth", authRouter)
  app.use("/api/v1/user", userRouter)
  app.use("/api/v1/file", fileRouter)

  app.use(errorHandler);
  app.use(notFoundHandler)
