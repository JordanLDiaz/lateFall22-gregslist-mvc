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
    <div>Company: ${this.company} miles</div>
    <div>Location: ${this.location}</div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>
    `
  }

  static JobForm() {
    return `
    <form onsubmit="app.jobsController.createJob()">
    <div class="form-floating mb-3">
      <input required type="text" minlength="3" class="form-control" id="title" placeholder="Job Title"
        name="title">
      <label for="job-title">Job Title</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="salary" placeholder="Job Salary" name="salary">
      <label for="job-salary">Job Salary</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="url" class="form-control" id="img" placeholder="Job Image" name="img">
      <label for="job-img">Image</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="company" class="form-control" id="company" placeholder="Job Company" name="company">
      <label for="job-company">Job Company</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="location" placeholder="Job Location" name="location">
      <label for="job-location">Job Location</label>
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a description here" id="description"
        name="description"></textarea>
      <label for="job-description">Job Description</label>
    </div>
    <button type="submit" class="btn btn-success mt-3">Submit</button>
    <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
  </form>
    `
  }
}