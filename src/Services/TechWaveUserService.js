import axios from 'axios'

const baseUrl = 'http://localhost:8080'
const url = '/events'
const urlRegister = url + '/register'
const urlLogin = url + '/login'
const urlJoinEvent = '/joinEvent'
const urlJoinedEvents = url + '/joined'
const token = localStorage.getItem("auth_token");
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const techwaveUserServices = {

    userRegister(data) {
        return axios
            .post(baseUrl + urlRegister, data)
            .then((res) => {
                console.log('Registration succeeded', res);
            })
            .catch((error) => {
                console.log('Registration failed.', error);
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
            .post(baseUrl + url + '/' + id + urlJoinEvent, config)
            .then((res) => res.data)
            .catch((error) => console.error(error));
    },

    joinedEvents() {
        return axios.get(baseUrl + urlJoinedEvents, config)
            .then((res) => res.data)
            .catch((error) => console.error(error));
    },

    
}

export default techwaveUserServices