import axios from 'axios'

const apiKey = 'E4251F1C-37C3-428E-9840-386E588F6A25'

const coinApi = axios.create({
  baseURL: 'https://rest.coinapi.io/v1/',
  timeout: 100000,
  headers: {'X-CoinAPI-Key': apiKey}
})

export default coinApi
export { apiKey }
