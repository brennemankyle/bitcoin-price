

import React, { Component } from 'react'
import { TableRow } from 'grommet'

class PriceList extends Component {
  render() {
    return (
      <TableRow>
        <TableCell key={c.property} scope="col" align={c.align}>
          {c.label}
        </TableCell>
      </TableRow>
    )
  }
}

export default PriceList
