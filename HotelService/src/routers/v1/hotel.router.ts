import express from 'express';
import { createHotelHandler, deleteHotelHandler, getAllHotelHandler, getHotelByIdHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotels.validators';


const hotelRouter = express.Router();

hotelRouter.post("/",validateRequestBody(hotelSchema), createHotelHandler)
hotelRouter.get("/:id", getHotelByIdHandler)
hotelRouter.get("/", getAllHotelHandler)

hotelRouter.delete("/:id", deleteHotelHandler)



export default hotelRouter;
