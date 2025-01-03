import React from 'react'
import { createRoot } from 'react-dom/client'

import Header from './components/Header'

const rootElm = document.getElementById('app')
const root = createRoot(rootElm)

const App = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

root.render(<App />)