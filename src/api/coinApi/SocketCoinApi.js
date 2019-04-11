import { apiKey } from './coinApi'

const baseUrl = 'wss://ws.coinapi.io/v1/'

// TODO: attempted websocket connection, which worked but it doesn't seem
// coin api returns the data we need for displaying current price
// instead it only seems to work for trading. Try a different api later?
const SocketCoinApi = async (connData) => {
  let conn = new WebSocket(baseUrl)

  await new Promise((resolve, reject) => {
    conn.addEventListener('open', function (event) {
      resolve()
    })
  })

  conn.onclose = (event) => console.log('Connection closed')
  conn.onmessage = (event) => console.log('Message received.', event.data)

  conn.send(JSON.stringify({
    'type': 'hello',
    'apikey': apiKey,
    'heartbeat': true,
    ...connData
  }))

  setTimeout(() => conn.close(), 1000)

  return conn
}

export default SocketCoinApi
