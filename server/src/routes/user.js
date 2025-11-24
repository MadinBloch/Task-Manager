import { Router } from "express";
import { getAllUsers, createUser,loginUsers } from "../controllers/userController/userController.js";
import {auth} from "../middlewares/auth.js"

const router = Router();

router.post('/signin',createUser);
router.get('/getall',auth,getAllUsers);
router.post('/login',loginUsers)





export default router; 