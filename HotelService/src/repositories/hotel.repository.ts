import logger from "../config/logger.config";
import Hotel from "../database/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";


 export async function createHotel(hotelData:createHotelDTO){
  const hotel = await Hotel.create(hotelData)
  logger.info(`Hotel created : ${hotel.id}`)
  return hotel

}

export async function getHotelById(id:number) {
const hotel = await Hotel.findByPk(id);
if(!hotel){
  logger.error(`Hotel not found :${id}`)
  throw new NotFoundError(`Hotel with id : ${id}  not found`)
}
return hotel
}

export async function getAllHotels() {
const hotel = await Hotel.findAll({
  where:{
    deletedAt:null
  }
});
if(!hotel){
  logger.error(`No hotel Found`)
  throw new NotFoundError("No hotel Found")
}
logger.info(`Hotel found :${hotel.length}`)
return hotel
}

export async function softDeleteHotel(id:number) {
  const hotel = await Hotel.findByPk(id);
  if(!hotel){
  logger.error(`Hotel not found :${id}`)
  throw new NotFoundError(`Hotel with id : ${id}  not found`)
}
hotel.deletedAt = new Date();
await hotel.save(); //Save the changes to the database
logger.info(`Hotel soft deleted : ${hotel.id}`)
return true;

}

