import axios from 'axios'

const instance =axios.create({
    baseURL:'https://tinder-herokuapp.herokuapp.com/'
})




export default instance;