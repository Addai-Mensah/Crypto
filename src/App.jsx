
import React from 'react'
import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/home/home.jsx"
import Connect from "./components/connect/connect.jsx"
import Cards from "./components/cards/cards.jsx"
import Newcard from './components/connect/newcard'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cards" element={<Cards />} />
        <Route exact path="/connect" element={<Connect />} />
        <Route exact path="/newcard" element={<Newcard />} />
      </Routes>
    </Router>

  )
}

export default App