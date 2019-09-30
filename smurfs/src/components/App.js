import React from 'react'
import './App.css'
import SmurfList from './SmurfList'
import Form from './Form'

const App = () => {
  return (
    <div className='App'>
      <h1>React Redux Smurfs</h1>
      <Form />
      <SmurfList />
    </div>
  )
}

export default App
