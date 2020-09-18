import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

export default function Home() {

  return (
    <div>
     <div class = "mainSection">
        <h1>Let's make a pizza!</h1>
        <Link to='/make-pizza'>Pizza?</Link>
    </div>
    </div>
  )
}