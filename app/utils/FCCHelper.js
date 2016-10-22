import axios from 'axios'

export default {
  getUsers (top100) {
    return axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${top100}`)
      .then(users => users.data)
      .catch(err => console.warn('Error in getUsers', err))
  }
}
