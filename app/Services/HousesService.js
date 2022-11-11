import { House } from "../Models/House.js";

class HousesService {
  removeHouse(houseId) {
    console.log("it's the house service", houseId);
  }
}



export const housesService = new HousesService()