import { appState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { carsService } from "../Services/CarsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawCars() {
  const cars = appState.cars
  let template = ''
  cars.forEach(car => template += car.CardTemplate)
  setHTML('listings', template)
}

function _drawActiveCar() {
  // @ts-ignore
  setHTML('details', appState.activeCar.ActiveCarTemplate)
}

function _drawCarForm() {
  setHTML('listing-form', Car.GetCarFormTemplate())
}

// FIXME Step 5: Create a controller with a console log in the contructor
export class CarsController {

  constructor() {
    // NOTE first step should always be get a console log
    // console.log('Hello Jeremy, your cars controller is working')
    appState.on('cars', _drawCars)
    appState.on('activeCar', _drawActiveCar)
  }

  showCars() {
    _drawCars()
    _drawCarForm()
  }

  setActiveCar(carId) {
    carsService.setActiveCar(carId)
  }

  createCar() {
    // NOTE don't refresh the page
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target
    let formData = getFormData(form)
    console.log(formData);
    carsService.createCar(formData)
    // @ts-ignore
    form.reset()
  }

  // NOTE only use async/await for Pop.confirm this week
  async removeCar(carId) {
    if (await Pop.confirm('Are you sure want to delete that car')) {
      carsService.removeCar(carId)
    }
  }
}