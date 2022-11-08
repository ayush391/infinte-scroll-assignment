import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar';

import AppState from './context/appState'

//for deploying on gh pages
const basePath = 'infinte-scroll-assignment'

function App() {

  return (
    <>
      <AppState>
        <HashRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </HashRouter>
      </AppState>
    </>
  )
}

export default App
