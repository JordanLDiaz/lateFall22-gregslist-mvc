import { generateId } from "../Utils/generateId.js";

export class Furniture {
  constructor(data) {
    this.id = generateId()
    this.item = data.item
    this.price = data.price
    this.location = data.location
    this.description = data.description
    this.img = data.img
    this.condition = data.condition
    this.createdAt = new Date()
  }

  get FurnitureCard() {
    return `
    <div class="col-12 col-md-4 p-4">
    <div class="card">
      <img src="${this.img}" class="card-img-top"
        alt="${this.item}">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between mb-2">
          <span>${this.item}</span>
          <span>$ ${this.price} | ${this.condition} condition</span>
          <span>${this.location}</span>
        </h5>
        <div class="d-flex justify-content-between">
          <button onclick="app.furnituresController.setActiveFurniture('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          See Details
          </button>
          <button onclick="app.furnituresController.removeFurniture('${this.id}')" title="Delete Item!" class="btn btn-danger">
            <i class="mdi mdi-delete"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
    `
  }

  get ActiveFurnitureTemplate() {
    return `
    <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">${this.item} </h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <h5>
    ${this.createdAt.toLocaleDateString()}
    </h5>
    <img src="${this.img}" alt="car" class="img-fluid">
    <b> $${this.price} | ${this.condition} condition</b>
    <p>${this.description}</p>
    <div> ${this.location}</div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>
    `
  }
}