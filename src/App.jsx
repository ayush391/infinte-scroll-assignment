import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar';

import AppState from './context/appState'

function App() {

  return (
    <>
      <AppState>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppState>
    </>
  )
}

export default App
