import { useState } from 'react'

import "./styles/main.scss"
import Header from './components/Header'

import Benefits from './components/Benefits'
import NewItems from './components/NewItems'
import About from './components/About'
import Realized from './components/Realized'
import Hits from './components/Hits'
import FormPrice from './components/FormPrice'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header/>
      <Benefits/>
      <NewItems/>
      <About/>
      <Realized/>
      <Hits/>
      <FormPrice/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
