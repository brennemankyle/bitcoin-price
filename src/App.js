import React, { Component } from 'react'
import './App.scss'
import PriceList from './components/PriceList/PriceList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PriceList />
      </div>
    )
  }
}

export default App
