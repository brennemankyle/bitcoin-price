import React, { Component } from 'react'
import { Box, Heading } from 'grommet'
import coinApi from '../../api/coinApi/coinApi'

class CurrentPrice extends Component {
  render() {
    return (
      <Box>
        <Heading>Current Price</Heading>
      </Box>
    )
  }

  componentWillMount() {
    coinApi.get('/exchangerate/BTC').then((response) => {
      console.log(response)
    })
  }
}

export default CurrentPrice
