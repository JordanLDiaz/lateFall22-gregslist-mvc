import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";

class HousesService {
  createHouse(formData) {
    let newHouse = new House(formData)
    console.log("new house data", newHouse)
    appState.houses = [...appState.houses, newHouse]
    saveState('houses', appState.houses)
  }
  removeHouse(houseId) {
    console.log("it's the house service", houseId);
  }
}



export const housesService = new HousesService()