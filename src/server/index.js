const express = require('express')
const { renderToString } = require('react-dom/server')

const ServerApp = require('../../dist-server/main.js').default

const app = express()

app.get('/', function (req, res) {
  const appHtml = ServerApp()
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="app">${renderToString(appHtml)}</div>
      </body>
    </html>
  `)
})

app.listen(3000)