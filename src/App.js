import React from 'react'
import Topbar from './components/topbar/Topbar'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from "react-router-dom"
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App