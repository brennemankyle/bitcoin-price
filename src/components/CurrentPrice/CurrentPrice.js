import React, { Component } from 'react'
import { Box, Heading, Grid } from 'grommet'
import styled from 'styled-components'
import _map from 'lodash/map'
import _maxBy from 'lodash/maxBy'
import _minBy from 'lodash/minBy'
import coins from '../../util/coins/coins'

// Make Deal seperate components and stop using styles from 1995
const GoodDeal = styled.div`
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); /* Standard syntax (must be last) */
`
const BadDeal = styled.div`
  background: palevioletred;
`

class CurrentPrice extends Component {
  render() {
    return (
      <Box>
        <Heading>Current Price</Heading>
        {this.renderPrice('Name', 'Abbv', 'Rate (BTC)', 'Deal', 'brand')}
        {this.renderPrices()}
      </Box>
    )
  }

  renderPrices = () => {
    let maxKey = _maxBy(Object.keys(this.props.prices), (key) => this.props.prices[key])
    let minKey = _minBy(Object.keys(this.props.prices), (key) => this.props.prices[key])

    return _map(this.props.prices, (value, key) => {
      let deal = null

      if (key === minKey) {
        deal = <GoodDeal>Buy now!!!</GoodDeal>
      } else if (key === maxKey) {
        deal = <BadDeal>Worst Price</BadDeal>
      }

      return this.renderPrice(key, coins[key], value, deal)
    })
  }

  renderPrice = (name, abbv, rate, deal = null, background = '') => {
    // TODO: use a table for tabular data... and make a component
    return (
      <Grid
        key={abbv}
        columns={{
          count: 4,
          size: "auto"
        }}
        gap="small"
      >
        <Box background={background}>{name}</Box>
        <Box background={background}>{abbv}</Box>
        <Box background={background}>{rate}</Box>
        <Box background={background}>{deal}</Box>
      </Grid>
    )
  }
}

export default CurrentPrice
