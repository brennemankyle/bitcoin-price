import { apiKey } from './coinApi'
import coins from '../../util/coins/coins'

const baseUrl = 'wss://ws.coinapi.io/v1/'

// TODO: attempted websocket connection, which worked but it doesn't seem
// coin api returns the data we need for displaying current price
// instead it only seems to work for trading. Try a different api later?
const SocketCoinApi = async () => {
  let conn = new WebSocket(baseUrl)

  await new Promise((resolve, reject) => {
    conn.addEventListener('open', function (event) {
      resolve()
    })
  })

  conn.onclose = (event) => console.log('Connection closed')
  conn.onmessage = (event) => console.log('Message received.', event)

  conn.send({
    'type': 'hello',
    'apikey': apiKey,
    'heartbeat': true,
    // 'subscribe_data_type': ['book'],
    // 'subscribe_filter_asset_id': [coins.Bitcoin],
  })

  return conn
}

export default SocketCoinApi
