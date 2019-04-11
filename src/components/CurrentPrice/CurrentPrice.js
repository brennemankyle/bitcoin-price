import React, { Component } from 'react'
import { Box, Heading } from 'grommet'
import _map from 'lodash/map'

class CurrentPrice extends Component {
  render() {
    return (
      <Box>
        <Heading>Current Price</Heading>
        {this.renderPrices()}
      </Box>
    )
  }

  renderPrices = () => {
    return _map(this.props.prices, (value, key) => <div>{key} {value}</div>)
  }
}

export default CurrentPrice
