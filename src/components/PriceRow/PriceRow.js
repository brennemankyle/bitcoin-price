import React, { Component } from 'react'
import { TableRow, TableCell } from 'grommet'
import coins from '../../util/coins/coins'
import _round from 'lodash/round'

class PriceRow extends Component {
  static defaultProps = {
    roundPrecision: 3
  }

  render() {
    return (
      <TableRow>
        <TableCell scope="col">
          {this.props.coinKey}
        </TableCell>
        <TableCell scope="col">
          {coins[this.props.coinKey]}
        </TableCell>
        {this.props.rates.map((rate, index) => {
          let className = ''

          if (this.props.minRates[index] === this.props.coinKey) {
            className = 'best-price'
          } else if (this.props.maxRates[index] === this.props.coinKey) {
            className = 'worst-price'
          }

          return (
            <TableCell key={index} scope="col" className={className}>
              {_round(rate, this.props.roundPrecision)}
            </TableCell>
          )
        })}
      </TableRow>
    )
  }
}

export default PriceRow
