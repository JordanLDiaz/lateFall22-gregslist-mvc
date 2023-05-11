// FIXME Step 1: Set up your model

import { generateId } from "../Utils/generateId.js"

export class Car {
  constructor(data) {
    this.id = generateId()
    this.make = data.make
    // NOTE JS dates are cool? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    this.createdAt = new Date()
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.mileage = data.mileage
    this.color = data.color
    this.img = data.img
    this.description = data.description
  }

  // FIXME Step 4: place template on our model

  // FIXME Step 7? update our template with fields from the class

  get CardTemplate() {
    return `
    <div class="col-12 col-md-4 p-4">
      <div class="card">
        <img src="${this.img}" class="card-img-top"
          alt="${this.model}">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between mb-2">
            <span>${this.make} ${this.model}</span>
            <span>$ ${this.price}</span>
          </h5>
          <div class="d-flex justify-content-between">
            <button onclick="app.carsController.setActiveCar('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button onclick="app.carsController.removeCar('${this.id}')" title="Delete car!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get ActiveCarTemplate() {
    return `
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${this.make} ${this.model}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <h5>
      ${this.createdAt.toLocaleDateString()}
      </h5>
      <img src="${this.img}" alt="car" class="img-fluid">
      <b>Price: $${this.price}</b>
      <p>${this.description}</p>
      <div>Mileage: ${this.mileage} miles</div>
      <div>Color: ${this.color}</div>
      <div>Year: ${this.year}</div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    `
  }

  static GetCarFormTemplate() {
    return `
    <section class="row my-3 justify-content-center">
    <div class="col-12 d-flex justify-content-center">
      <p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          Add New Car
        </button>
      </p>
    </div>
    <div class="col-9 collapse" id="collapseExample">
      <div class="card py-2" id="listing-form">
        <form onsubmit="app.carsController.createCar()">
          <div class="mb-3 mx-5">
            <label for="car-make">Make</label>
            <input type="text" name="make" class="form-control" id="car-make" placeholder="Car Make"
              aria-describedby="carMake" min-length="3" maxlength="15" required>
          </div>
          <div class="mb-3  mx-5">
            <label for="car-model">Model</label>
            <input type="text" name="model" class="form-control" id="car-model" placeholder="Car Model"
              aria-describedby="carModel" min-length="3" maxlength="15" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="img">Image URL</label>
            <input type="url" name="img" class="form-control" id="car-img" placeholder="Car Image"
              aria-describedby="carImage" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="price">Price</label>
            <input type="number" name="price" class="form-control" id="car-price" placeholder="Car Price"
              aria-describedby="carPrice" min="3" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="year">Year</label>
            <input type="number" name="year" class="form-control" id="car-year" placeholder="Car Year"
              aria-describedby="carYear" min="4" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="mileage">Mileage</label>
            <input type="number" name="mileage" class="form-control" id="car-milage" placeholder="Car Year"
              aria-describedby="carMileage" min="4" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="color">Color</label>
            <input type="text" name="color" class="form-control" id="car-color" placeholder="Car Color"
              aria-describedby="carColor" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="description">Description</label>
            <input type="text" name="description" class="form-control" id="car-description" placeholder="Car Description"
              aria-describedby="carDescription" min-length="3" required>
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