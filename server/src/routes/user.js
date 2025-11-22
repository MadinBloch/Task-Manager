import { Router } from "express";
import { getAllUsers, createUser } from "../controllers/userController/userController.js";

const router = Router();

router.post('/',createUser);
router.get('/',getAllUsers);



export default router; 