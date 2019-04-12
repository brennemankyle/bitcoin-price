import React, { Component } from 'react'
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import CurrentPriceContainer from './containers/CurrentPriceContainer/CurrentPriceContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grommet theme={grommet} full>
          <CurrentPriceContainer />
        </Grommet>
      </div>
    )
  }
}

export default App
