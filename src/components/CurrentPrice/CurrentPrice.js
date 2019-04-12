import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableRow, TableCell, Heading } from 'grommet'
import PriceRow from '../PriceRow/PriceRow'
import _map from 'lodash/map'
import _maxBy from 'lodash/maxBy'
import _minBy from 'lodash/minBy'

// Make Deal seperate components and stop using styles from 1995
// const GoodDeal = styled.div`
//   background: red; /* For browsers that do not support gradients */
//   background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet); /* For Safari 5.1 to 6.0 */
//   background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Opera 11.1 to 12.0 */
//   background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Firefox 3.6 to 15 */
//   background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); /* Standard syntax (must be last) */
// `
// const BadDeal = styled.div`
//   background: palevioletred;
// `

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
          {this.renderPrices()}
        </TableBody>
      </Table>
    ]
  }

  renderPrices = () => {
    let maxKey = _maxBy(Object.keys(this.props.prices), (key) => this.props.prices[key])
    let minKey = _minBy(Object.keys(this.props.prices), (key) => this.props.prices[key])

    return _map(this.props.prices,
      (value, key) => <PriceRow coinKey={key} rates={value} />)
  }
}

export default CurrentPrice
