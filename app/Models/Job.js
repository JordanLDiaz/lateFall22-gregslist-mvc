import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.salary = data.salary
    this.company = data.company
    this.description = data.description
    this.img = data.img
    this.location = data.location
    this.createdAt = new Date()
  }

  get CardTemplate() {
    return `
    <div class="col-12 col-md-4 p-4">
      <div class="card">
        <img src="${this.img}" class="card-img-top"
          alt="${this.title}">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between mb-2">
            <span>${this.title}</span>
            <span>$ ${this.salary}</span>
            <span>${this.location}</span>
          </h5>
          <div class="d-flex justify-content-between">
            <button onclick="app.jobsController.setActiveJob('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button onclick="app.jobsController.removeJob('${this.id}')" title="Delete job!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get ActiveJobTemplate() {
    return `
    <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">${this.title}</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <h5>
    ${this.createdAt.toLocaleDateString()}
    </h5>
    <img src="${this.img}" alt="car" class="img-fluid">
    <b>Salary: $${this.salary}</b>
    <p>${this.description}</p>
    <div>Company: ${this.company} </div>
    <div>Location: ${this.location}</div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>
    `
  }

  static JobForm() {
    return `
    <section class="row my-3 justify-content-center">
    <div class="col-12 d-flex justify-content-center">
      <p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          Add New Job
        </button>
      </p>
    </div>
    <div class="col-9 collapse" id="collapseExample">
      <div class="card py-2" id="listing-form">
        <form onsubmit="app.jobsController.createJob()">
          <div class="mb-3 mx-5">
            <label for="title">Title</label>
            <input type="text" name="title" class="form-control" id="title" placeholder="Job Title"
              aria-describedby="title" min-length="3"required>
          </div>
          <div class="mb-3  mx-5">
            <label for="salary">Salary</label>
            <input type="number" name="salary" class="form-control" id="salary" placeholder="Salary"
              aria-describedby="salary" required>
          </div>
          <div class="mb-3 mx-5">
            <label for="company">Company</label>
            <input type="text" name="company" class="form-control" id="company" placeholder="Company"
              aria-describedby="company" min="0" max="50" required>
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