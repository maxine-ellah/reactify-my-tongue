import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = this.props.words[0]
    console.log(this.state)
  }

  clickHandler () {
    console.log(this.props.words[1])
    this.setState({ word: this.props.words[Math.floor(Math.random)] })
    console.log("inside clickHandler", this.state)
  }


  render () {
    return (
      <div>
        <h1>Tongue</h1>
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
