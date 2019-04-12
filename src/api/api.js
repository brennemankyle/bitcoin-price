import coinApi from './coinApi/coinApi'
import coins from '../util/coins/coins'
import _map from 'lodash/map'
import _reduce from 'lodash/reduce'
import _times from 'lodash/times'

// TODO: use a different coin api so we don't have to do this consolidation
const consolidateCoins = (coinKeys, outputCoinKey, func) => {
  delete coinKeys[coinKeys.indexOf(outputCoinKey)]
  let promises = _map(coinKeys, func)

  return Promise.all(promises).then((values) => {
    return coinKeys.reduce((acc, key, index) => {
      acc[key] = values[index]

      return acc
    }, {})
  })
}

class Api {
  testDataGetExchangeRateFor(coinKeys, outputCoinKey) {
    return consolidateCoins(coinKeys, outputCoinKey, (key) => [Math.random()])
  }

  testDataGetHistoricRateFor(coinKeys, outputCoinKey, startTime, period = '1MIN') {
    return consolidateCoins(coinKeys, outputCoinKey, (key) => _times(30, () => Math.random()))
  }

  getExchangeRateFor(coinKeys, outputCoinKey) {
    return consolidateCoins(coinKeys, outputCoinKey, (key) => coinApi.get(`
        /exchangerate/${coins[key]}/${coins[outputCoinKey]}`))
      .then((prices) => {
        _reduce(prices, (acc, value, key) => acc[key] = [value.data.rate], {})
      })
  }

  getHistoricRateFor(coinKeys, outputCoinKey, startTime, period = '1MIN') {
    return consolidateCoins(coinKeys, outputCoinKey, (key) => coinApi.get(`
        ohlcv/${coins[key]}/${coins[outputCoinKey]}/history
        ?period_id=${period}&time_start=${startTime.utc().format()}`))
      .then((prices) => {
        _reduce(prices, (acc, value, key) => acc[key] = value.data
          .map((record) => (record.price_high + record.price_low)/2),
        {})
      })
  }
}

export default new Api()
