import { appState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  let template = ''
  appState.houses.forEach(h => template += h.CardTemplate)
  console.log('draw function is working');
  setHTML('listings', template)
}





export class HousesController {
  constructor() {
    // console.log('Hello Jordan, your car controller is working!')
    _drawHouses()
  }

  async removeHouse() {
    if (await Pop.confirm('Are you sure you want to delete that?')) {
      housesService.removeHouse(houseId)
      // console.log('remove house working')
    }
  }
}