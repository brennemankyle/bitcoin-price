import React, { Component } from 'react'
import { Button } from 'grommet'
import HistoricPrice from '../../components/HistoricPrice/HistoricPrice'
import api from '../../api/api'
import coins from '../../util/coins/coins'
import moment from 'moment'

class HistoricPriceContainer extends Component {
  static defaultProps = {
    timerMillisecond: 3000,
    outputValue: 'Bitcoin',
    period: '1MIN',
    startTime: moment().subtract(30, 'minutes'),
  }

  constructor(props) {
    super(props)

    this.state = {
      prices: {}
    }
  }

  render() {
    // TODO add indicator of last refresh
    return [
      <HistoricPrice key="price" prices={this.state.prices} />,
      <Button key="refresh" label="Refresh" onClick={this.getPrices} />,
    ]
  }

  componentWillMount() {
    this.getPrices()
  }

  getPrices = () => {
    api.testDataGetHistoricRateFor(Object.keys(coins), this.props.outputValue, this.props.startTime, this.props.period)
      .then((prices) => {
        this.setState({
          prices: prices
        })
      })
  }
}

export default HistoricPriceContainer
