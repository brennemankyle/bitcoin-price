import React, { Component } from 'react'
import CurrentPrice from '../../components/CurrentPrice/CurrentPrice'
import coinApi from '../../api/coinApi/coinApi'
import coins from '../../util/coins/coins'
import _map from 'lodash/map'
import _clone from 'lodash/clone'

const OUTPUT_VALUE = coins.Bitcoin

const displayCoins = _clone(coins)
delete displayCoins.Bitcoin

class CurrentPriceContainer extends Component {
  static defaultProps = {
    timerMillisecond: 3000
  }

  constructor(props) {
    super(props)

    this.state = {
      prices: {}
    }
  }

  render() {
    return <CurrentPrice prices={this.state.prices} />;
  }

  componentWillMount() {
    this.getPrices()
  }

  getPrices = () => {
    let promises = _map(displayCoins, (value) => new Promise((resolve, reject) => resolve({data: {rate: Math.random()}}))) // Test Data
    // let promises = _map(displayCoins,
    //   (value) => coinApi.get(`/exchangerate/${value}/${OUTPUT_VALUE}`))

    Promise.all(promises).then((values) => {
      let prices = Object.keys(displayCoins).reduce((acc, key, index) => {
        acc[key] = values[index].data.rate

        return acc
      }, {})

      this.setState({
        prices: prices
      })

      // Call again
      setTimeout(this.getPrices, this.props.timerMillisecond)
    })
  }
}

export default CurrentPriceContainer
