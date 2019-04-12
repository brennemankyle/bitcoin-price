import React, { Component } from 'react'
import PriceRow from '../PriceRow/PriceRow'
import _map from 'lodash/map'
import _maxBy from 'lodash/maxBy'
import _minBy from 'lodash/minBy'

class PriceList extends Component {
  render() {
    let maxRates = Array(1).fill().map((value, index) => _maxBy(Object.keys(this.props.prices), (key) => this.props.prices[key][index]))
    let minRates = Array(1).fill().map((value, index) => _minBy(Object.keys(this.props.prices), (key) => this.props.prices[key][index]))

    return _map(this.props.prices, (value, key) =>
      <PriceRow key={key} coinKey={key} rates={value} maxRates={maxRates} minRates={minRates} />)
  }
}

export default PriceList
