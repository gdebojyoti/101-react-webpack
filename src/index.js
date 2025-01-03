import React, { createElement } from 'react'
import { createRoot } from 'react-dom/client'

const rootElm = document.getElementById('app')
const root = createRoot(rootElm)

const h1 = createElement('h1', {}, 'I got in.')
const App = () => {
  return (
    <div>
      {h1}
    </div>
  )
}

root.render(<App />)