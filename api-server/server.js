require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const config = require('./config')
const projects = require('./projects/router')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const msg = `
  <pre>Access Forbidden.</pre>
  `

  res.send(msg)
})

app.get('/api', (req, res) => {
  const help = `
  <pre>
    <table style="width: 50%;">
      <tr style="text-align: left;">
        <th>Route</th>
        <th>HTML Verb</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>/api/b</td>
        <td>GET</td>
        <td>Get All categories of blog.</td>
      </tr>
      <tr>
        <td>/api/b/:category</td>
        <td>GET</td>
        <td>Get All Posts in :category.</td>
      </tr>
      <tr>
        <td>/api/b/:category</td>
        <td>POST</td>
        <td>Create post in :category.</td>
      </tr>
      <tr>
        <td>/api/b/:category/:post_id</td>
        <td>GET</td>
        <td>Get a post.</td>
      </tr>
      <tr>
        <td>/api/b/:category/:post_id</td>
        <td>PUT</td>
        <td>Update a post with new content.</td>
      </tr>
      <tr>
        <td>/api/b/:category/:post_id</td>
        <td>DELETE</td>
        <td>Delete a post.</td>
      </tr>
      <tr>
        <td>/api/projects</td>
        <td>GET</td>
        <td>Get All projects.</td>
      </tr>
      <tr>
        <td>/api/projects/:project_id</td>
        <td>GET</td>
        <td>Get a project.</td>
      </tr>
      <tr>
        <td>/api/projects/:project_id</td>
        <td>PUT</td>
        <td>Update a project.</td>
      </tr>
      <tr>
        <td>/api/projects/:project_id</td>
        <td>DELETE</td>
        <td>Delete a project.</td>
      </tr>      
    </table>
  </pre>

  `

  res.send(help)
})


app.use('/api/projects', projects)

app.get('/*', function(req, res) {
  res.status(404).send('404: Resource Not Found')
})

app.listen(config.port, () => {
  console.log(`Server listing on port ${config.port}, Ctrl+C to stop.`)
})