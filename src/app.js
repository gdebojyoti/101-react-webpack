import React from 'react'
import { hydrateRoot } from 'react-dom/client'

import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

const rootElm = document.getElementById('app')
hydrateRoot(rootElm, <App />)
