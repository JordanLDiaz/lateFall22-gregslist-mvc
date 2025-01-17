import { Car } from "./Models/Car.js"
import { Furniture } from "./Models/Furniture.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { Pet } from "./Models/Pet.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState, saveState } from "./Utils/Store.js"

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code

  // SECTION Cars
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  // cars = []

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
  /** @type {import('./Models/House').House|null} */

  activeHouse = null


  // SECTION Jobs
  /** @type {import('./Models/Job').Job[]} */
  jobs = loadState('jobs', [Job])
  // jobs = [
  //   new Job({
  //     title: 'Software Engineer',
  //     salary: 45000,
  //     company: 'Google',
  //     description: 'Code all the things',
  //     img: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHdhcmUlMjBkZXZ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //     location: 'Seattle'
  //   }),
  //   new Job({
  //     title: 'Cat Walker',
  //     salary: 50000,
  //     company: 'Rover',
  //     description: 'Walk all the cats',
  //     img: 'https://images.unsplash.com/photo-1641762719225-0fba618a7366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwb24lMjBsZWFzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  //     location: 'Meridian'
  //   })
  // ]

  /** @type {import('./Models/Job').Job|null} */
  activeJob = null

  // SECTION Pets
  /** @type {import('./Models/Pet').Pet[]} */
  // pets = [
  //   new Pet({
  //     species: 'Cat',
  //     breed: 'Tabby',
  //     name: 'Simon',
  //     age: 7,
  //     price: 25,
  //     description: 'The cutest little babe you ever did meet.',
  //     location: 'Meridian, ID',
  //     img: 'https://images.unsplash.com/photo-1589872267076-a0859175685b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFiYnklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
  //   })
  // ]
  pets = loadState('pets', [Pet])
  /** @type {import('./Models/Pet').Pet|null} */
  activePet = null


  // SECTION furniture
  /** @type {import('./Models/Furniture').Furniture[]} */
  furnitures = [
    new Furniture({
      item: "couch",
      price: 150,
      location: 'Meridian',
      description: 'Well loved, just a few cat scratches...',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      condition: 'good'
    })
  ]

  /** @type {import('./Models/Furniture').Furniture|null} */
  activeFurniture = null
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
