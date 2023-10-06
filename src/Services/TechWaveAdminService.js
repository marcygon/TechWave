import axios from 'axios'

const baseUrl = 'http://localhost:8080'
const url = '/events'
const techwaveAdminServices = {

    deleteEventById(id) {
        return axios
            .delete(baseUrl + url + `/${id}`)
            .then((res) => {
                console.log(`Event ${id} deleted`, res.data);
            })
            .catch((error) => {
                console.error(`Failed to delete event ${id}`, error);
            });
    },

    addEvent(data) {
        return axios.post(baseUrl + url, data, config)
            .then((res) => {
                console.log('Event added', res.data);
            })
            .catch((error) => {
                console.error('Failed to add event', error);
            });
    },

    editEventById(id, data) {
        return axios.put(baseUrl + url + `/${id}`, data, config)
            .then((res) => {
                console.log(`Event ${id} edited`, res.data);
            })
            .catch((error) => {
                console.error(`Failed to edit ${id} event`, error);
            });
    },


}

export default techwaveAdminServices