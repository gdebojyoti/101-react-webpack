import React from 'react'
import { hydrateRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router'

import HomePage from 'pages/Home'
import AboutPage from 'pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

const rootElm = document.getElementById('app')
hydrateRoot(rootElm, <App />)
