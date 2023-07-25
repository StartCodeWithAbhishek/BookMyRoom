import express from 'express';
import Room from "../models/Room.js";
import { verifyAdmin } from '../utils/verifyToken.js';

import {createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getAllRoom,updateRoomAvailability

} from "../controllers/Room.js";



const router=express.Router();
// CREATE

router.post("/:hotelid",verifyAdmin,createRoom);

// UPDATE


router.put("/:id",verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// DELEATE
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//GET 
router.get("/:id",getRoom);
// GET ALL
router.get("/", getAllRoom);












export default router;