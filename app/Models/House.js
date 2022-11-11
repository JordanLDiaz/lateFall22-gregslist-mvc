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
}