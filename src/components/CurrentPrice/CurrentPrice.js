import React, { Component } from 'react'
import { Box, Heading, Grid } from 'grommet'
import _map from 'lodash/map'
import coins from '../../util/coins/coins'

class CurrentPrice extends Component {
  render() {
    return (
      <Box>
        <Heading>Current Price</Heading>
        {this.renderPrice('Name', 'Abbv', 'Rate (BTC)', 'brand')}
        {this.renderPrices()}
      </Box>
    )
  }

  renderPrices = () => {
    return _map(this.props.prices, (value, key) => this.renderPrice(key, coins[key], value))
  }

  renderPrice = (name, abbv, rate, background = '') => {
    return (
      <Grid
        key={abbv}
        columns={{
          count: 3,
          size: "auto"
        }}
        gap="small"
      >
        <Box background={background}>{name}</Box>
        <Box background={background}>{abbv}</Box>
        <Box background={background}>{rate}</Box>
      </Grid>
    )
  }
}

export default CurrentPrice
