import User from "../../models/users/user.model.js";
import bcrypt from 'bcrypt';
import  jwt from 'jsonwebtoken';
import { config } from "../../config/config.js";

export const createUser = async (req, res) => {
    console.log("BODY:", req.body);
  try {
    const { name, email, password} = req.body; 
    
    // Validate Required Fields
    if(!name || !email || !password){
      return res.status(400).json({
        error: "All fiedls are required"
      });
    }


    // Check if user already exists
    const existingUser = await User.findOne({ email});

    if(existingUser){
      return res.status(409).json({
        error: `User with email ${email} already exists`
      })
    }


    const hashPassword = await bcrypt.hash(password,10);  
    // const user = await User.create(req.body);

      const user = await  User.create({
        name,
        email,
        password: hashPassword
    })

      res.status(201).json({
        message : "User created successfully",
        user
      });
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


  export const loginUsers = async (req, res) =>{
    try {
      
      const {email, password} = req.body;

      // Return User is not Found
      const user = await User.findOne({
        email
      })

      if(!user){
        return  res.status(409).json({
          error : "User not Fond"
        })
      }


      // Password Checking 
      const isMatch = await bcrypt.compare(password,user.password);

      if(!isMatch){
        return res.status(401).json({
            error:  "passoword is not matching"
        })
      }

      const token = jwt.sign({
        id: user.id,
        email: user.email,
        role: user.role
      },process.env.SECRET_KEY,
      {
        expiresIn: "2d"
      }
    )

    res.status(201).json({
      message: "Login Successfully",
      token,
      user
    })


    } catch (error) {
      res.status(400).json({
        error: error.message || "Something went wrong while login users",
      });
    }
  }