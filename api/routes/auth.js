import express from 'express';
import {register,login} from "../controllers/auth.js";

const router=express.Router();
// we created a regiser function in the ""../controllers/auth.js" and use here in the route


router.post("/register",register)
router.post("/login",login)









export default router;