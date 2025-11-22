import User from "../../models/users/user.model.js";

export const createUser = async (req, res) => {
    console.log("BODY:", req.body);
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message || "Something went wrong while creating user",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({
      error: error.message || "Something went wrong while fetching users",
    });
  }
};
