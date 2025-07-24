import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/main.scss"

import MainPage from './pages/MainPage'
import Catalog from './pages/Catalog'
// import HitsCatalog from './pages/HitsCatalog'
import MainHitsCatalog from './pages/MainHitsCatalog'
function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/hitsCatalog' element={<MainHitsCatalog/>}/>
        </Routes>
      </div>
      
    </Router>
  )
}

export default App
