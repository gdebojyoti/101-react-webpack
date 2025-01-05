const express = require('express')
const path = require('path')
const fs = require('fs')
const { renderToString } = require('react-dom/server')

const ServerApp = require('../../dist-server/main.js').default

const app = express()

app.get('/', function (req, res) {
  const appHtml = ServerApp()

  // Read the generated HTML template (with injected script tags) from the client build
  const htmlTemplate = fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf-8')

  // Inject the server-side rendered HTML and client-side JS into the template
  const finalHtml = htmlTemplate.replace(
    '<div id="app"></div>',
    `<div id="app">${renderToString(appHtml)}</div>`
  )

  res.send(finalHtml)
})

// Serve static assets (e.g., JavaScript files) from the dist-client directory
app.use(express.static(path.resolve(__dirname, '../../dist')))

app.listen(3000)