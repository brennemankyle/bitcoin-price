import React, { Component } from 'react'
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import HistoricPriceContainer from './containers/HistoricPriceContainer/HistoricPriceContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grommet theme={grommet} full>
          <HistoricPriceContainer />
        </Grommet>
      </div>
    )
  }
}

export default App
