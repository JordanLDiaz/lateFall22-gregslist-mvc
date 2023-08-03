import { generateId } from "../Utils/generateId.js";

export class Pet {
  constructor(data) {
    this.id = generateId();
    this.species = data.species
    this.breed = data.breed || 'Not applicable'
    this.name = data.name
    this.age = data.age
    this.price = data.price
    this.description = data.description
    this.location = data.location
    this.img = data.img
    this.createdAt = new Date()
  }

  get PetCard() {
    return `
    <div class="col-12 col-md-4 p-4">
    <div class="card">
      <img src="${this.img}" class="card-img-top"
        alt="${this.name}">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between mb-2">
          <span>${this.species}</span>
          <span>$ ${this.price}</span>
          <span>${this.location}</span>
        </h5>
        <div class="d-flex justify-content-between">
          <button onclick="app.petsController.setActivePet('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          See Details
          </button>
          <button onclick="app.petsController.removePet('${this.id}')" title="Delete Pet!" class="btn btn-danger">
            <i class="mdi mdi-delete"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
    `
  }

  get ActivePetTemplate() {
    return `
    <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">${this.species} | ${this.breed}</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <h5>
    ${this.createdAt.toLocaleDateString()}
    </h5>
    <img src="${this.img}" alt="car" class="img-fluid">
    <b> $${this.price}</b>
    <p>${this.description}</p>
    <div>${this.name} | Age: ${this.age} </div>
    <div> ${this.location}</div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>
    `
  }

  static PetForm() {
    return `
    <section class="row my-3 justify-content-center">
    <div class="col-12 d-flex justify-content-center">
      <p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          Add New Pet
        </button>
      </p>
    </div>
    <div class="col-9 collapse" id="collapseExample">
      <div class="card py-2" id="listing-form">
        <form onsubmit="app.petsController.createPet()">
          <div class="mb-3 mx-5">
            <label for="species">Species</label>
            <input type="text" name="species" class="form-control" id="species" placeholder="Species"
              aria-describedby="species" min-length="3" required>
          </div>
          <div class="mb-3  mx-5">
            <label for="breed">Breed - optional</label>
            <input type="text" name="breed" class="form-control" id="breed" placeholder="Breed"
              aria-describedby="breed">
          </div>
          <div class="mb-3 mx-5">
            <label for="name">Name</label>
            <input type="text" name="company" class="form-control" id="name" placeholder="Name"
              aria-describedby="name" min="0" max="50" required>
          </div>
          <div class="mb-3 mx-5">
          <label for="age">Age</label>
          <input type="number" name="age" class="form-control" id="age" placeholder="Age"
            aria-describedby="age" min="0" required>
        </div>
        <div class="mb-3 mx-5">
          <label for="price">Price</label>
          <input type="number" name="price" class="form-control" id="price" placeholder="price"
            aria-describedby="price" min="0" required>
        </div>
          <div class="mb-3 mx-5">
            <label for="img">Image URL</label>
            <input type="url" name="img" class="form-control" id="img" placeholder="Image Url"
              aria-describedby="img" required>
          </div>
          <div class="mb-3 mx-5">
          <label for="location">Location</label>
          <input type="text" name="location" class="form-control" id="location" placeholder="Location"
            aria-describedby="location" required>
        </div>
          <div class="mb-3 mx-5">
            <label for="description">Description</label>
            <textarea type="text" name="description" class="form-control" id="description" placeholder="Home Description"
              aria-describedby="description" rows="3" min-length="3" required> </textarea>
          </div>
          <div class="text-center mx-5">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="btn" class="btn btn-danger">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </section>
    `
  }
}