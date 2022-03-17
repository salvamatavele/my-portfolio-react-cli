import Axios from 'axios'

export const url = 'http://127.0.0.1:3333/v1'
const axios = Axios.create({
	baseURL: url,
})

export default axios
