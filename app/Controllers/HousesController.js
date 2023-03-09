import { appState } from "../AppState.js"
import { House } from "../Models/House.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.CardTemplate)
  // console.log('draw function is working');
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('listing-form', House.GetHouseForm())
}



export class HousesController {
  constructor() {
    // console.log('Hello Jordan, your car controller is working!')
    // _drawHouses()
    appState.on('houses', _drawHouses)
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  // async removeHouse() {
  //   if (await Pop.confirm('Are you sure you want to delete that?')) {
  //     housesService.removeHouse(houseId)
  //     // console.log('remove house working')
  //   }
  // }
}