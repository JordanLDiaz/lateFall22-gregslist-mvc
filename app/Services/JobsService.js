import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { saveState } from "../Utils/Store.js";

function _saveJobs() {
  saveState('jobs', appState.jobs)
}

class JobsService {

  setActiveJob(jobId) {
    let foundJob = appState.jobs.find(j => j.id == jobId)
    // console.log('[SETTING ACTIVE]', foundJob);
    // @ts-ignore
    appState.activeJob = foundJob
  }

  createJob(formData) {
    let newJob = new Job(formData)
    appState.jobs.push(newJob)
    appState.emit('jobs')
    // NOTE alternatively...
    // appState.jobs = [...appState.jobs, newJob]
    _saveJobs()
  }

  removeJob(jobId) {
    // console.log('removing id from service');
    let filteredJobs = appState.jobs.filter(j => j.id != jobId)
    appState.jobs = filteredJobs
    // console.log('Jobs array with job removed');
    _saveJobs()
  }

}

export const jobsService = new JobsService();