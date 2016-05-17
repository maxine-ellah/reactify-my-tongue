import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

render(<App words={[{
      word: "Cheese",
      img: "",
      audio: "" }

    ]} userName="Maxine"/>, document.querySelector('main'))
console.log('welcome to reactify-my-tongue')
