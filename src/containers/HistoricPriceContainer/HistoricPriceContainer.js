import React, { Component } from 'react'
import CurrentPrice from '../../components/CurrentPrice/CurrentPrice'
import coinApi from '../../api/coinApi/coinApi'
import coins from '../../util/coins/coins'
import _map from 'lodash/map'
import _clone from 'lodash/clone'

class CurrentPriceContainer extends Component {
  static defaultProps = {
    timerMillisecond: 3000,
    outputValue: 'Bitcoin',
  }

  constructor(props) {
    super(props)

    this.state = {
      prices: {}
    }

    this.displayCoins = _clone(coins)
    delete this.displayCoins[this.props.outputValue]
  }

  render() {
    return <CurrentPrice prices={this.state.prices} />;
  }

  componentWillMount() {
    this.getPrices()
  }

  getPrices = () => {
    let promises = _map(this.displayCoins, (value) => new Promise((resolve, reject) => resolve({data: {rate: Math.random()}}))) // Test Data
    // let promises = _map(this.displayCoins,
    //   (value) => coinApi.get(`ohlcv/LIT/${OUTPUT_VALUE}/history?period_id=1MIN&time_start=2019-04-12T00:00:00`))

    let startTime = moment().subtract(30, 'minutes').utc().format()
    coinApi.get(`ohlcv/LIT/${this.props.outputValue}/history?period_id=1MIN&time_start=${startTime}`).then((data) => console.log(data))

    // curl https://rest.coinapi.io/v1/ohlcv/LIT/BTC/history?period_id=1MIN&time_start=2016-01-01T00:00:00

    Promise.all(promises).then((values) => {
      let prices = Object.keys(this.displayCoins).reduce((acc, key, index) => {
        acc[key] = values[index].data.rate

        return acc
      }, {})

      // TODO: data sent could be less opaque
      this.setState({
        prices: prices
      })

      // Call again
      setTimeout(this.getPrices, this.props.timerMillisecond)
    })
  }
}

export default CurrentPriceContainer
