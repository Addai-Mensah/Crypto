
import React from 'react'
import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/home/home.jsx"
import Connect from "./components/connect/connect.jsx"
import Cards from "./components/cards/cards.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cards" element={<Cards />} />
        <Route exact path="/connect" element={<Connect />} />
      </Routes>
    </Router>

  )
}

export default App