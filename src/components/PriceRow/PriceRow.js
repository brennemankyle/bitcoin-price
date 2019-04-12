import React, { Component } from 'react'
import { TableRow, TableCell } from 'grommet'
import coins from '../../util/coins/coins'

class PriceRow extends Component {
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
              {rate} (BTC)
            </TableCell>
          )
        })}
      </TableRow>
    )
  }
}

export default PriceRow
