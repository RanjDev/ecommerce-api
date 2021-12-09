import Joi from "joi";

const usersValidate = Joi.object({
  userName: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

export default usersValidate;
