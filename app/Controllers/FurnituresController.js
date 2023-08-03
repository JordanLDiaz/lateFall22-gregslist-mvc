import { appState } from "../AppState.js"
import { furnituresService } from "../Services/FurnituresService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawFurniture() {
  // console.log('drawing furniture');
  let furniture = appState.furnitures
  let template = ''
  // console.log(furniture);
  appState.furnitures.forEach(f => template += f.FurnitureCard)
  setHTML('listings', template)
}

function _drawActiveFurniture() {
  setHTML('details', appState.activeFurniture?.ActiveFurnitureTemplate)
}

export class FurnituresController {
  constructor() {
    // console.log('hello from the furnitures controller');
  }

  showFurniture() {
    _drawFurniture()
    _drawActiveFurniture()
  }

  setActiveFurniture(furnitureId) {
    furnituresService.setActiveFurniture(furnitureId)
  }
}