import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  // SECTION Cars
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])

  /** @type {import('./Models/Car').Car|null} */
  activeCar = null

  // SECTION Houses
  /** @type {import('./Models/House').House[]} */

  houses = loadState('houses', [House])
  // houses = [
  //   new House({
  //     type: 'House',
  //     bedroom: 4,
  //     bathroom: 2.5,
  //     sqFootage: 1850,
  //     price: 275000,
  //     img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
  //     description: 'clean',
  //     location: 'Meridian'
  //   }),
  //   new House({
  //     type: 'Cottage',
  //     bedroom: 2,
  //     bathroom: 1,
  //     sqFootage: 1050,
  //     price: 150000,
  //     img: 'https://images.unsplash.com/photo-1527368717868-ff088cc80d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
  //     description: 'Cute and cozy',
  //     location: 'Iceland'
  //   }),
  //   new House({
  //     type: 'Tudor',
  //     bedroom: 9,
  //     bathroom: 5,
  //     sqFootage: 4500,
  //     price: 1000000,
  //     img: 'https://images.unsplash.com/photo-1621347259775-76fd7f582b9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     description: 'Nestled in the countryside',
  //     location: 'Scotland'
  //   })
  // ]
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
