import axios from 'axios'

const baseUrl = 'http://localhost:8080'
const url = '/events'
const urlAuthRegister = url + '/register'
const urlAuthLogin = url + '/login'
const techwaveAuthServices = {

  isAuthor(object) {
    if (this.getAuthUser().id !== object.author.id) return false;
    return true;
  },

  isAuth() {
    if (!localStorage.getItem("auth")) return false;
    return true;
  },

  getAuthUser() {
    const authJson = localStorage.getItem("auth")
      ? localStorage.getItem("auth")
      : false;
    return JSON.parse(authJson);
  },

  saveAuthUser(authUser) {
    localStorage.setItem("auth", JSON.stringify(authUser));
  },

  registerByData(data) {
    return axios.post(baseUrl + urlAuthRegister, data)
      .then((res) => res.data)
      .catch((error) => console.log(error))
  },

  loginByData(data) {
    return axios.post(baseUrl + urlAuthLogin, data)
      .then((res) => res.data)
      .catch((error) => console.log(error))
  },


}

export default techwaveAuthServices