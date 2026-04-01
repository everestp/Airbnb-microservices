import { Request ,Response,NextFunction } from "express";
import { createHotelService, deleteHotelService, getAllHotelService, getHotelByIdService } from "../service/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req:Request , res:Response , next:NextFunction){
//1. Call the service layer
const hotelResponse = await createHotelService(req.body);

//2. Send the response
res.status(StatusCodes.CREATED).json({
  message:"Hotel create sucessfully",
  data:hotelResponse,
  success:true
})


}

export async function getHotelByIdHandler(req:Request , res:Response , next:NextFunction){
//1. Call the service layer
const hotelResponse = await getHotelByIdService(Number(req.params.id));

//2. Send the response
res.status(StatusCodes.CREATED).json({
  message:"Hotel found sucessfully",
  data:hotelResponse,
  success:true
})



}
export async function getAllHotelHandler(req:Request , res:Response , next:NextFunction){
//1. Call the service layer
const hotelResponse = await getAllHotelService();

//2. Send the response
res.status(StatusCodes.OK).json({
  message:"Sucessfull",
  data:hotelResponse,
  success:true
})



}


export async function deleteHotelHandler(req:Request , res:Response , next:NextFunction){
//1. Call the service layer
const hotelResponse = await deleteHotelService(Number(req.params.id));

//2. Send the response
res.status(StatusCodes.OK).json({
  message:"Hotel deleted sucessfully",
  data:hotelResponse,
  success:true
})



}






