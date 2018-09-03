import axios from 'axios'
import mock from './mock'

function getLeverJson() {
  // return axios.get('https://api.lever.co/v0/postings/skava?mode=json')
  return mock
}

function transformData(data) {
  // NOTE:  we want to prune the json data and drop all the info we don't use...
  const job = {
    id: data.id,
    title: data.text,
    commitment: data.categories.commitment,
    location: data.categories.location,
    team: data.categories.team,
  }
  return job
}

function processList(list) {
  return list.map(item => { return transformData(item) })
}

function getJobs() {
  return axios.all([
    getLeverJson()
  ]).then((arr) => ({
    jobs: processList(arr[0].data),
    error: false
  })).catch((err) => ({
    jobs: [],
    error: true,
    fault: err
  }))
}

const helpers = {
  getJobs,
}

export default helpers
