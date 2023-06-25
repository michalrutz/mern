import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Character from './Character.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/character/:id" element={<Character/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
