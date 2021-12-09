import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/users", (req, res) => {
  res.json({ message: "Get all users" });
});

export default userRoutes;
