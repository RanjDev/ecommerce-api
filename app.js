import express from "express";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.routes.js";

const app = express();

dotenv.config("dotenv");

// our api will work with json
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //body parser

// calling the routes
app.use(userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}`);
});
