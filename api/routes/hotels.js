import express from 'express';
import Hotel from "../models/Hotel.js";
// importing the database function from other files...
import {createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotel,
    countByCity,countByType,getHotelRooms

} from "../controllers/hotel.js";
import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();
// CREATE

router.post("/",verifyAdmin,createHotel);

// UPDATE


router.put("/:id",verifyAdmin, updateHotel);

// DELEATE
router.delete("/:id",verifyAdmin,deleteHotel);

//GET 
router.get("/find/:id",getHotel);
// GET ALL
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);




export default router;