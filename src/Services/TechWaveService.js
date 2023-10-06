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
            .catch((error) => console.log(error))
    },

    findHighlights() {
        return axios
            .get(baseUrl + urlHighlights)
            .then((res) => res.data)
            .catch((error) => console.log(error))
    },

    eventById(id) {
        return axios
            .get(baseUrl + url + `/${id}`)
            .then((res) => res.data)
            .catch((error) => console.log(error))
    },

    availableEvents() {
        return axios
            .get(baseUrl + urlAvailable)
            .then((res) => res.data)
            .catch((error) => console.log(error))
    },

    notAvailableEvents() {
        return axios
            .get(baseUrl + urlNotAvailable)
            .then((res) => res.data)
            .catch((error) => console.log(error))
    },

    eventsByCategory(id) {
        return axios.get(baseUrl + urlCategory + `/${id}`)
            .then((res) => res.data)
            .catch((error) => console.log(error))
    },

}

export default techwaveServices