import { appState } from "../AppState.js"
import { Pet } from "../Models/Pet.js"
import { jobsService } from "../Services/JobsService.js"
import { petsService } from "../Services/PetsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawPets() {
  // console.log('drawing pets');
  let template = ''
  appState.pets.forEach(p => template += p.PetCard)
  setHTML('listings', template)
}

function _drawActivePet() {
  console.log('drawing active pet');
  setHTML('details', appState.activePet?.ActivePetTemplate)
}

function _drawPetForm() {
  setHTML('listing-form', Pet.PetForm())
}

export class PetsController {
  constructor() {
    // console.log('Hello from the pets controller!');
    appState.on('pets', _drawPets)
    appState.on('activePet', _drawActivePet)
  }

  showPets() {
    _drawPets()
    _drawPetForm()
  }

  setActivePet(petId) {
    petsService.setActivePet(petId)
  }

  createPet() {
    console.log('creating pet!');
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target
    let formData = getFormData(form)
    console.log('this is my pet data', formData);
    petsService.createJob(formData)
    // @ts-ignore
    form.reset()
  }

  async removePet(petId) {
    // console.log('removing pet');
    if (await Pop.confirm('Are you sure you want to remove this listing?')) {
      petsService.removePet(petId)
    }
  }
}