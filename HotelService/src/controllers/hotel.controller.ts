import { Request ,Response,NextFunction } from "express";
import { createHotelService, getHotelByIdService } from "../service/hotel.service";

export async function createHotelHandler(req:Request , res:Response , next:NextFunction){
//1. Call the service layer
const hotelResponse = await createHotelService(req.body);

//2. Send the response
res.status(201).json({
  message:"Hotem create sucessfully",
  data:hotelResponse,
  success:true
})


}

export async function getHotelByIdHandler(req:Request , res:Response , next:NextFunction){
//1. Call the service layer
const hotelResponse = await getHotelByIdService(Number(req.params.id));

//2. Send the response
res.status(200).json({
  message:"Hotel found sucessfully",
  data:hotelResponse,
  success:true
})


}





