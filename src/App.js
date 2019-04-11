import React, { Component } from 'react'
import './App.scss'
import CurrentPrice from './components/CurrentPrice/CurrentPrice'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentPrice />
      </div>
    )
  }
}

export default App
