import axios from 'axios'

const baseUrl = 'http://localhost:8080'
const url = '/events'
const techwaveAdminServices = {

    deleteEventById(id) {
        return axios
            .delete(baseUrl + url + `/${id}`)
            .then((res) => res.data)
            .catch((error) => console.log(error));
    },

    eventPost(data) {
        return axios.post(baseUrl + url + data, config)
            .then((response) => {
                console.log('Evento Creado:', response.data);
            })
            .catch((error) => {
                console.error('Evento no Creado:', error);
            });
    },

    eventPut(id, data) {
        return axios.put(baseUrl + url + `/${id}`, data, config)
            .then((response) => {
                console.log('Evento Editado:', response.data);
            })
            .catch((error) => {
                console.error('Evento no Editado:', error);
            });
    },

}

export default techwaveAdminServices