import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";

function _saveHouse() {
  saveState('houses', appState.houses)
}

class HousesService {

  setActiveHouse(houseId) {
    let foundHouse = appState.houses.find(h => h.id == houseId)
    console.log(foundHouse);
    appState.activeHouse = foundHouse
  }

  createHouse(formData) {
    let newHouse = new House(formData)
    console.log("new house data", newHouse)
    appState.houses = [...appState.houses, newHouse]
    _saveHouse()
  }

  removeHouse(houseId) {
    console.log("it's the house service", houseId);
    let filteredHouses = appState.houses.filter(h => h.id != houseId)
    console.log('Houses array with houses removed', filteredHouses);
    appState.houses = filteredHouses
    _saveHouse()
  }
}



export const housesService = new HousesService()