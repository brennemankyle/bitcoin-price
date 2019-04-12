import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableRow, TableCell, Heading } from 'grommet'
import PriceList from '../PriceList/PriceList'
import PriceLegend from '../PriceLegend/PriceLegend'
import moment from 'moment'

class HistoricPrice extends Component {
  static defaultProps = {
    period: '1MIN',
    startTime: moment().subtract(30, 'minutes'),
  }

  render() {
    let rateCount = Math.floor(moment.duration(moment().diff(this.props.startTime)).asMinutes())

    return [
      <Heading key="head">Historic Price</Heading>,
      <Table key="body">
        <TableHeader>
          <TableRow>
            <TableCell>
            </TableCell>
            <TableCell>
            </TableCell>
            <TableCell colSpan={rateCount}>
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
            {Array(rateCount).fill().map((_, index) => {
              return (
                <TableCell key={index}>
                  {rateCount - index}m
                </TableCell>
              )
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          <PriceList prices={this.props.prices} rateCount={rateCount} />
        </TableBody>
      </Table>,
      <PriceLegend key="legend" />
    ]
  }
}

export default HistoricPrice
