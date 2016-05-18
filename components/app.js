import React, { Component } from 'react'
import englishWords from './englishWords'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = englishWords[0]
    console.log("this.state in constructor: ", this.state)
  }

  clickHandler () {
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0
    this.setState({  word: englishWords[randomNumber].word, respell: englishWords[randomNumber].respell, image: englishWords[randomNumber].image })
    console.log("englishWords: ", englishWords[Math.floor(Math.random() * (2 - 0 + 1)) + 0].word)
  }


  render () {
    return (
      <div>
        <h1>Reactify-my-tongue</h1>
        <h4>{this.props.userName}</h4>
        <h3>Say it loud, say it proud:</h3>
        <h2>{this.state.word}</h2>
        <h4>{this.state.respell}</h4>
        <img src={this.state.image} onClick={this.clickHandler.bind(this)}/>
        <audio>{this.state.audio}</audio>
      </div>
    )

  }

}

export default App
