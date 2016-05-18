import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = this.props.words[0]
    console.log("this.state in constructor: ", this.state)
  }

  clickHandler () {
    this.setState({ word: this.props.words[Math.floor(Math.random() * (3 - 0 + 1)) + 0] })
    console.log("inside clickHandler", this.state)
    console.log(Math.floor(Math.random() * (3 - 0 + 1)) + 0)
  }


  render () {
    return (
      <div>
        <h1>Reactify-my-tongue</h1>
        <h4>{this.props.userName}</h4>
        <h3>Say it loud, say it proud:</h3>
        <h2>{this.state.word}</h2>
        <h4>{this.state.respell}</h4>
        <img src="{this.state.img}" />
        <audio>{this.state.audio}</audio>
        <button onClick={this.clickHandler.bind(this)} ></button>
      </div>
    )

  }

}

export default App
