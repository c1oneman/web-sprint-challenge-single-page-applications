import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
render(
    // Wrap the <App /> in a provider
    <Router><App /></Router>
    , document.querySelector('#root')
  )
  