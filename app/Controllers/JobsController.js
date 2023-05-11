import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawJobs() {
  // console.log('drawing jobs');
  const jobs = appState.jobs
  let template = ''
  jobs.forEach(j => template += j.CardTemplate)
  setHTML('listings', template)
}

function _drawActiveJob() {
  // console.log('drawing active job');
  setHTML('details', appState.activeJob.ActiveJobTemplate)
}

function _drawJobForm() {
  setHTML('listing-form', Job.JobForm())
}

export class JobsController {
  constructor() {
    appState.on('jobs', _drawJobs)
    appState.on('activeJob', _drawActiveJob)
  }

  showJobs() {
    _drawJobs()
    _drawJobForm()
  }

  setActiveJob(jobId) {
    jobsService.setActiveJob(jobId)
  }

  createJob() {
    window.event.preventDefault()
    // console.log('creating job');
    let form = window.event.target
    let formData = getFormData(form)
    // console.log('this is my formdata', formData);
    jobsService.createJob(formData)
  }

  async removeJob(jobId) {
    if (await Pop.confirm('Are you sure you want to remove this job?')) {
      jobsService.removeJob(jobId)
    }
  }
}