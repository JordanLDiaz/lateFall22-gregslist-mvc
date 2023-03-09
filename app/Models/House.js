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
  }

  get CardTemplate() {
    return `
    <div class="col-3 p-4">
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
          <button class="btn btn-primary">
            See Details
          </button>
          <button onclick="app.housesController.removeHouse()" title="Delete House!" class="btn btn-danger">
            <i class="mdi mdi-delete"></i>
          </button>
        </div>
      </div>
    </div>
    `
  }

  static GetHouseForm() {
    return `
    <form>
    <div class="form-floating mb-3">
      <input required type="text" minlength="3" class="form-control" id="type" placeholder="Home Type"
        name="type">
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
      <input required type="number" class="form-control" id="house-price" placeholder="House Price"
        name="price">
      <label for="house-price">Price</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="location" placeholder="Location" name="location">
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