import React from 'react'

import { StaticRouter, Route, Routes } from 'react-router'

import HomePage from 'pages/Home'
import AboutPage from 'pages/About'

const App = ({ location }) => {
  return (
    <StaticRouter location={location}>
      <Routes>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </StaticRouter >
  )
}

export default App