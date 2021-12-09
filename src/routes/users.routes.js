import { Router } from "express";
import Users from "../models/users.model.js";
import usersValidate from "../validations/users.validate.js";

const userRoutes = Router();

userRoutes.get("/users", async (req, res) => {
  let users;
  try {
    users = await Users.find();
  } catch (err) {
    return res.status(400).json({ error: "Wrong" });
  }
  res.json(users);
});

userRoutes.post("/users", async (req, res) => {
  try {
    await usersValidate.validateAsync(req.body);
  } catch (err) {
    return res.status(400).json({ error: err.details[0].message });
  }
  const newUser = new Users(req.body);
  await newUser.save();
  res.json(newUser);
});

export default userRoutes;
