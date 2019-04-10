const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const  LRU = require("lru-cache")
const options = {
  max: 500,
  length: (n, key) => n * 2 + key.length,
  dispose: (key, n) =>  n.close(),
  maxAge: 1000 * 60 * 60
}

const cache = new LRU(options)

function getCacheKey (req) {
  return `${req.url}`
}
async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  if (cache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(cache.get(key))
    return
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    if (res.statusCode !== 200) {
      res.send(html)
      return
    }
    cache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}
app.prepare()
.then(() => {
  const server = express()


  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/posts/:slug', (req, res) => {
    renderAndCache(req, res, '/showPost', { slug: req.params.slug })
  })


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready. Please open your browser at http://localhost:${port}`)
  })
})