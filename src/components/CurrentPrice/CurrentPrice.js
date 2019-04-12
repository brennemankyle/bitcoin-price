import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableRow, TableCell, Heading } from 'grommet'
import PriceList from '../PriceList/PriceList'
import PriceLegend from '../PriceLegend/PriceLegend'

class CurrentPrice extends Component {
  render() {
    return [
      <Heading key="head">Current Price</Heading>,
      <Table key="body">
        <TableHeader>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              Abbv
            </TableCell>
            <TableCell>
              Rate
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <PriceList prices={this.props.prices} />
        </TableBody>
      </Table>,
      <PriceLegend key="legend" />
    ]
  }
}

export default CurrentPrice
