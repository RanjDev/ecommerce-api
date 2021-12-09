import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

const Users = mongoose.model("Users", usersSchema);

export default Users;
