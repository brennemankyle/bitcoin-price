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
          return (
            <TableCell key={index} scope="col">
              {rate} (BTC)
            </TableCell>
          )
        })}
      </TableRow>
    )
  }
}

export default PriceRow
