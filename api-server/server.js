require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const config = require('./config')
const categories = require('./categories')
// const project = require('./project')
const posts = require('./posts')
// const comments = require('./comments')

const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  const help = `
  <pre>
    Test
    This is only a test
  </pre>

  `

  res.send(help)
})

app.use((req, res, next) => {
  // const token = req.get('Authorization')

  // if (token) {
  //   req.token = token
    next()
  // } else {
  //   res.status(403).send({
  //     error: 'Please provide an Authorization header to identify yourself.'
  //   })
  // }
})

app.get('/categories', (req, res) => {
  categories.getAll(req.token)
    .then(
      (data) => res.send(data),
      (error) => {
        console.error(error)
        res.status(500).send({
          error: 'There was an error.'
        })
      }
    )
})

app.get('/posts', (req, res) => {
  posts.getAll(req.token)
    .then(
      (data) => res.send(data),
      (error) => {
        console.error(error)
        res.status(500).send({
          error: 'There was an error.'
        })
      }
    )
})


app.listen(config.port, () => {
  console.log(`Server listing on port ${config.port}, Ctrl+C to stop.`)
})