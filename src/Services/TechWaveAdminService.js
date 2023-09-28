import axios from 'axios'

const url = 'http://localhost:8080/events'
const techwaveAdminServices = {

    deleteEventById(id) {
        return axios
            .delete(url + `/${id}`)
            .then((res) => res.data)
            .catch((error) => console.log(error));
    },


}

export default techwaveAdminServices