import React, { Component } from 'react'
import { Grommet, Anchor, Box } from "grommet";
import { grommet } from "grommet/themes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CurrentPriceContainer from './containers/CurrentPriceContainer/CurrentPriceContainer'
import HistoricPriceContainer from './containers/HistoricPriceContainer/HistoricPriceContainer'

class App extends Component {
  // TODO: make fancier nav
  // TODO: import routes and nav bar
  render() {
    return (
      <div className="App">
        <Grommet theme={grommet} full>
          <Router>
            <div>
              <Box>
                <Anchor href="/">Current</Anchor>
                <Anchor href="/historic">Historic</Anchor>
              </Box>

              <Route path="/" exact component={CurrentPriceContainer} />
              <Route path="/historic/" component={HistoricPriceContainer} />
            </div>
          </Router>
        </Grommet>
      </div>
    )
  }
}

export default App
