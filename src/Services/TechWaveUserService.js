import axios from 'axios'

const baseUrl = 'http://localhost:8080'
const url = '/events'
const urlRegister = url + '/register'
const urlLogin = url + '/login'
const techwaveUserServices = {

    userRegister(data) {
        return axios
            .post(baseUrl + urlRegister, data)
            .then((res) => {
                console.log("Register succed", res);
            })
            .catch((error) => {
                console.log("Register failed", error);
            });
    },

    userLogin(data) {
        return axios
            .post(baseUrl + urlLogin, data)
            .then((res) => res.data)
            .catch((error) => console.log(error));
    },

    joinEvent(id) {
        return axios
            .get(baseUrl + url + "/joinEvent")
            .then((res) => res.data)
            .catch((error) => console.error(error));
    },

    inscribedEvent(id) {
        return axios.post(url + `/${id}/inscribed`, data, config)
            .then((response) => {
                console.log('Inscrito:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    },

    myEvents() {
        return axios.get(baseUrl + url + '/myEvents', config)
            .then((res) => res.data)
            .catch((error) => {
                console.error('Error:', error);
            })
    }
}

export default techwaveUserServices