import React, { Component } from 'react'
import { Grid, Box } from 'grommet'

// TODO: Make this look better
class PriceLegend extends Component {
  render() {
    return (
      <div style={{width: '20em'}}>
        <Grid
          columns={{
            count: 2,
            size: "auto"
          }}
          gap="small"
        >
          <Box className="best-price">Best Price</Box>
          <Box className="worst-price">Worst Price</Box>
        </Grid>
      </div>
    )
  }
}

export default PriceLegend
