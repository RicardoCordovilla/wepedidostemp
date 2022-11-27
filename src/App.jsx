import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './components/routes/ProtectedRoutes'

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

import Project from './components/routes/Project'
import Header from './components/Header'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import Design from './components/routes/Design'
import Catalog from './components/routes/Catalog'

const headers = {
  headers: {
    Authorization: 'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwYzJlYjQwLTQ3YTYtNGI0My1hMzVkLTdjZjRiYjRiYTZmNSIsImVtYWlsIjoicmljYXJkb0BlbWFpbC5jb20iLCJyb2xlIjoibm9ybWFsIiwiaWF0IjoxNjY5MzIyMjU5fQ.4l8fJ_ZabTKkKIZwdNKMhQhbXNzjA6Yzsos0TlHXtUs'
  }
}


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/design' element={<Design />} />
        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path='/a' element={<Project />} />
        {/* </Route> */}
        <Route path='/catalog' element={<Catalog />} />
      </Routes>

    </div>
  )
}

export default App
