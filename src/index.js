import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

const rootElm = document.getElementById('app')
const root = createRoot(rootElm)

const app = createElement('h1', {}, 'I got in.')

root.render(app)