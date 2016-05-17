import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

render(<App words={[{
      word: "Cheese",
      repell: "cheez",
      image: "",
      audio: "" },
      {
      word: "Bread",
      repell: "bred",
      image: "",
      audio: "" },
      {
      word: "Trousers",
      repell: "trou-zerz",
      image: "",
      audio: "" }

    ]} userName="Maxine"/>, document.querySelector('main'))
console.log('welcome to reactify-my-tongue')
