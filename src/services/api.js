//utilizar o axios para conectar o front ao back
import axios from 'axios'

//criando uma instancia do axios
const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api