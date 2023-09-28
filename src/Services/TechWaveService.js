import axios from 'axios'

const url = 'http://localhost:8080/events'
const techwaveServices = {

    getAllEvents(){
        return axios
        .get(url)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },
    
    findHighlights(){
        return axios
        .get(url + `/highlights`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },

    eventById(id){
        return axios
        .get(url + `/${id}` )
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },

    availableEvents(){
        return axios
        .get(url + `/available`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },

    notAvailableEvents(){
        return axios
        .get(url + `/notAvailable`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },
    
    eventsByCategory(id){
        return axios.get(url + `/category/${id}` )
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },

}

export default techwaveServices