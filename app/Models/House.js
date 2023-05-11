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
    <section class="row my-3 justify-content-center">
    <div class="col-12 d-flex justify-content-center">
      <p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          Add New Home
        </button>
      </p>
    </div>
    <div class="col-9 collapse" id="collapseExample">
      <div class="card py-2" id="listing-form">
        <form onsubmit="app.housesController.createHouse()">
          <div class="mb-3 mx-5">
            <label for="house-type">Type of Home</label>
            <input type="text" name="type" class="form-control" id="type" placeholder="Home Type"
              aria-describedby="type" min-length="3" maxlength="15" required>
          </div>
          <div class="mb-3  mx-5">
            <label for="house-bedroom">Bedrooms</label>
            <input type="number" name="bedroom" class="form-control" id="bedroom" placeholder="Bedrooms"
              aria-describedby="bedroom" min="0" max="50" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="house-bathroom">Bathrooms</label>
            <input type="number" name="bathroom" class="form-control" id="bathroom" placeholder="Bathrooms"
              aria-describedby="bathroom" min="0" max="50" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="sqFootage">Sq. Footage</label>
            <input type="number" name="sqFootage" class="form-control" id="sqFootage" placeholder="Sq. Footage"
              aria-describedby="sqFootage" min="100" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="price">Price</label>
            <input type="number" name="price" class="form-control" id="price" placeholder="Price"
              aria-describedby="Price" required>
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