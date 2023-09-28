import axios from 'axios'

const url = 'http://localhost:8080/events'
const techwaveUserServices = {

    userRegister(data){
        return axios
        .post(url + `/register`, data)
        .then((res) => {
            console.log("Register succed", res);
          })
          .catch((error) => {
            console.log("Register failed", error);
          });
    },

    userLogin(data){
        return axios
        .post(url + `/login`, data)
        .then((res) => res.data)
        .catch((error) => console.log(error));
    },

    joinEvent(id){
        return axios
        .get(url + "/joinEvent")
        .then((res) => res.data)
        .catch((error) => console.error(error));
    },


}

export default techwaveUserServices