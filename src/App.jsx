import { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Group from './components/Group'
import Main from './components/Main'

function App() {

  return (
    <>
    <div className='maincontainer'>
     <Navbar />
     <Navbar2 />
     <Group />
     <Main />
    </div>
    </>
  )
}

export default App
