const express = require('express')
const path = require('path')
const fs = require('fs')
const { renderToString } = require('react-dom/server')

const ServerApp = require('../../dist-server/main.js').default

const app = express()

// this is at the top to avoid dist/index.html from being served for home page route
app.get('/', serveReactApp)

// serve static assets (e.g. CSS & JS files) from the dist (client) folder
app.use(express.static(path.resolve(__dirname, '../../dist')))

app.get('*', serveReactApp)

// take the index.html file from dist (client) folder; inject the SSR app into <div id="app">; return it as response
function serveReactApp (req, res) {
  const appHtml = ServerApp({ location: req.url })

  // read the generated HTML template (with injected script tags) from the client build
  const htmlTemplate = fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf-8')

  // inject the server-side rendered HTML and client-side JS into the template (i.e., index.html from dist folder)
  const finalHtml = htmlTemplate.replace(
    '<div id="app"></div>',
    `<div id="app">${renderToString(appHtml)}</div>`
  )

  res.send(finalHtml)
}

app.listen(3000)