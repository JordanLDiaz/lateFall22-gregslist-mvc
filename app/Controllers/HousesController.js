import { appState } from "../AppState.js"
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.CardTemplate)
  // console.log('draw function is working');
  setHTML('listings', template)
}

function _drawActiveHouse() {
  setHTML('details', appState.activeHouse.ActiveHouseTemplate)
}

function _drawHouseForm() {
  setHTML('listing-form', House.GetHouseForm())
}

export class HousesController {
  constructor() {
    // console.log('Hello Jordan, your car controller is working!')
    appState.on('houses', _drawHouses)
    appState.on('activeHouse', _drawActiveHouse)
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  setActiveHouse(houseId) {
    housesService.setActiveHouse(houseId)
  }

  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    console.log(formData)
    housesService.createHouse(formData)
  }

  async removeHouse(houseId) {
    if (await Pop.confirm('Are you sure you want to delete this house?')) {
      housesService.removeHouse(houseId)
      // console.log('remove house working')
    }
  }
}