import React, { Component } from 'react'

const englishWords = [
      {
      word: "Cheese",
      respell: "cheez",
      image: "",
      audio: ""
      },
      {
      word: "Bread",
      respell: "bred",
      image: "",
      audio: ""
      },
      {
      word: "Trousers",
      respell: "trou-zerz",
      image: "",
      audio: ""
      }

    ]

class App extends Component {

  constructor (props) {
    super(props)
    this.state = englishWords[0]
    console.log("this.state in constructor: ", this.state)
  }

  clickHandler () {
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0
    this.setState({  word: englishWords[randomNumber].word, respell: englishWords[randomNumber].respell, img: englishWords[randomNumber].img })
    console.log("englishWords: ", englishWords[Math.floor(Math.random() * (2 - 0 + 1)) + 0].word)
    // console.log("this.state: ", this.state)
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
