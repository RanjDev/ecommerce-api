import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./src/routes/users.routes.js";

const app = express();

dotenv.config("dotenv");

main();
async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce-db");
    console.log("DB connected successfully");
  } catch (err) {
    console.log(`DB connection failed`);
  }
}

// our api will work with json
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //body parser

// calling the routes
app.use(userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}`);
});
