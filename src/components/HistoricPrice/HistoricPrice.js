import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableRow, TableCell, Heading } from 'grommet'
import PriceList from '../PriceList/PriceList'
import PriceLegend from '../PriceLegend/PriceLegend'

class HistoricPrice extends Component {
  render() {
    return [
      <Heading key="head">Historic Price</Heading>,
      <Table key="body">
        <TableHeader>
          <TableRow>
            <TableCell>
            </TableCell>
            <TableCell>
            </TableCell>
            <TableCell colSpan={this.props.rateCount}>
              Rates (BTC) minutes ago
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableHeader>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              Abbv
            </TableCell>
            {Array(this.props.rateCount).fill().map((_, index) => {
              return (
                <TableCell key={index}>
                  {this.props.rateCount - index}m
                </TableCell>
              )
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          <PriceList prices={this.props.prices} rateCount={this.props.rateCount} />
        </TableBody>
      </Table>,
      <PriceLegend key="legend" />
    ]
  }
}

export default HistoricPrice
