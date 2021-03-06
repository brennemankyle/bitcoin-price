import React, { Component } from 'react'
import CurrentPrice from '../../components/CurrentPrice/CurrentPrice'
import api from '../../api/api'
import coins from '../../util/coins/coins'

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
  }

  render() {
    return <CurrentPrice prices={this.state.prices} />;
  }

  componentWillMount() {
    this.getPrices()
  }

  getPrices = () => {
    api.getExchangeRateFor(Object.keys(coins), this.props.outputValue)
      .then((prices) => {
        this.setState({
          prices: prices
        })

        // Call again
        setTimeout(this.getPrices, this.props.timerMillisecond)
      })
  }
}

export default CurrentPriceContainer
