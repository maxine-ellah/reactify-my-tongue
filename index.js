import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

render(<App words={[{
      word: "Cheese",
      respell: "cheez",
      image: "",
      audio: "" },
      {
      word: "Bread",
      respell: "bred",
      image: "",
      audio: "" },
      {
      word: "Trousers",
      respell: "trou-zerz",
      image: "",
      audio: "" }

    ]} userName="Maxine"/>, document.querySelector('main'))
console.log('welcome to reactify-my-tongue')
