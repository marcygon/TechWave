import axios from 'axios'

const baseUrl = 'http://localhost:8080'
const url = '/events'
const urlHighlights = url + '/highlights'
const urlAvailable = url + '/available'
const urlNotAvailable =  url + '/notAvailable'
const urlCategory = url + '/category'
const techwaveServices = {

    getAllEvents() {
        return axios
            .get(baseUrl + url)
            .then((res) => res.data)
            .catch((err) => console.log(err))
    },

    findHighlights() {
        return axios
            .get(baseUrl + urlHighlights)
            .then((res) => res.data)
            .catch((err) => console.log(err))
    },

    eventById(id) {
        return axios
            .get(baseUrl + url + `/${id}`)
            .then((res) => res.data)
            .catch((err) => console.log(err))
    },

    availableEvents() {
        return axios
            .get(baseUrl + urlAvailable)
            .then((res) => res.data)
            .catch((err) => console.log(err))
    },

    notAvailableEvents() {
        return axios
            .get(baseUrl + urlNotAvailable)
            .then((res) => res.data)
            .catch((err) => console.log(err))
    },

    eventsByCategory(id) {
        return axios.get(baseUrl + urlCategory + `/${id}`)
            .then((res) => res.data)
            .catch((err) => console.log(err))
    },

}

export default techwaveServices