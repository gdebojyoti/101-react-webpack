import React from 'react'
import { renderToString } from 'react-dom/server'

import Header from '../components/Header'

const App = () => {
  return (
    <div>
      <Header />
      in server
    </div>
  )
}

const ServerApp = () => renderToString(<App />)

export default ServerApp