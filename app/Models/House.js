import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(data) {
    this.id = generateId()
    this.type = data.type
    this.bedroom = data.bedroom
    this.bathroom = data.bathroom
    this.sqFootage = data.sqFootage
    this.price = data.price
    this.img = data.img
    this.description = data.description
    this.location = data.location
    this.createdAt = new Date()
  }

  get CardTemplate() {
    return `
    <div class="col-12 col-md-4 p-4">
      <div class="card">
        <img src="${this.img}" class="card-img-top card-size" alt="${this.type}">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-betwen mb-2">
            <div class="row"> 
              <h5>${this.type}</h5>
              <h5>$${this.price}</h5>
            </div>
            <div class="row">
              <div> ${this.bedroom} bed / ${this.bathroom} bath </div>
            </div>
          </h5>
          <button onclick="app.housesController.setActiveHouse('${this.id}')"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">
            See Details
          </button>
          <button onclick="app.housesController.removeHouse('${this.id}')" title="Delete House!" class="btn btn-danger">
            <i class="mdi mdi-delete"></i>
          </button>
        </div>
      </div>
    </div>
    `
  }

  get ActiveHouseTemplate() {
    return `
    <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">${this.type}</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <h5>
    ${this.createdAt.toLocaleDateString()}
    </h5>
    <img src="${this.img}" alt="car" class="img-fluid">
    <b> ${this.bedroom} beds | ${this.bathroom} baths</b>
    <div> ${this.sqFootage} sqft. | $${this.price}</div>
    <p>${this.description}</p>
    <div>Located in ${this.location}</div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>
    `
  }

  static GetHouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()">
    <div class="form-floating mb-3">
      <input required type="text" minlength="3" class="form-control" id="type" placeholder="Home Type" name="type">
      <label for="type">Home Type</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="bedroom" placeholder="Bedrooms" name="bedroom">
      <label for="bedroom">Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="bathroom" placeholder="Bathrooms" name="bathroom">
      <label for="bathroom">Bathrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="sqFootage" placeholder="Sq. Footage"
        name="sqFootage">
      <label for="sqFootage">Sq Footage</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="url" class="form-control" id="img" placeholder="House Image" name="img">
      <label for="house-img">Image Url</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="price" placeholder="House Price"
        name="price">
      <label for="house-price">Price</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="location" placeholder="Location" name="location">
      <label for="location">Location</label>
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a description here" id="house-description"
        name="description"></textarea>
      <label for="house-description">Description</label>
    </div>
    <button type="submit" class="btn btn-success mt-3">Submit</button>
    <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
  </form>
    `
  }
}