import { appState } from "../AppState.js";
import { Pet } from "../Models/Pet.js";
import { saveState } from "../Utils/Store.js";

function _savePets() {
  saveState('pets', appState.pets)
}

class PetsService {
  setActivePet(petId) {
    let foundPet = appState.pets.find(p => p.id == petId)
    // console.log('found', foundPet);
    // @ts-ignore
    appState.activePet = foundPet
  }

  createJob(formData) {
    let newPet = new Pet(formData)
    console.log(newPet);
    appState.pets.push(newPet)
    appState.emit('pets')
    _savePets()
  }

  removePet(petId) {
    let filteredPets = appState.pets.filter(p => p.id != petId)
    console.log('deleteing pet');
    appState.pets = filteredPets
    _savePets()
  }
}

export const petsService = new PetsService();