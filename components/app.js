import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = this.props.words[0]
  }

  render () {
    return (
      <div>
        <h1>Tongue</h1>
        <h4>{this.props.userName}</h4>
        <h3>Say it loud, say it proud:</h3>
        <h2>{this.state.word}</h2>
        <h4>{this.state.respell}</h4>
        <img> {this.state.img} </img>
        <audio>{this.state.audio}</audio>
      </div>
    )
  }

}

export default App
