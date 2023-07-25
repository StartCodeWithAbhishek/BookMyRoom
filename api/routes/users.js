import express from 'express';
const router=express.Router();
import {
    updateUser,
    deleteUser,
    getUser,
    getAllUser

} from "../controllers/user.js";

import {verifyToken,verifyUser,verifyAdmin} from "../utils/verifyToken.js";



// router.get("/checkAuthentication",verifyToken,(req,res,next) => {
//     res.send("hellow user you are authenticated You are Loged In ...");
// });
// router.get("/checkuser/:id",verifyUser,(req,res,next) => {
//     res.send("hellow user you are authenticated You are Loged In ... and you can delede your account");
// });
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next) => {
//     res.send("hellow admin you are authenticated You are Loged In ... and you can delede all account");
// });




// UPDATE




router.put("/:id",verifyUser, updateUser);

// DELEATE
router.delete("/:id",verifyUser,deleteUser);

//GET 
router.get("/:id",verifyUser,getUser);
// GET ALL
router.get("/",verifyAdmin, getAllUser);



export default router;