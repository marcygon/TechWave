import axios from 'axios'

const url = 'http://localhost:8080/events'
const techwaveServices = {
    getAllEvents(){
        return axios.get(url)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },
    findHighlights(){
        return axios.get(url + `/highlights`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    }
}

export default techwaveServices