const express = require('express')
const projects = require('./projects')
const router = express.Router()

router.use((req, res, next) => {
  console.log('time: ', Date.now())
  next()
})

router.route('/')
  .get((req, res) => {
    projects.getAll(req.token)
      .then(
        (data) => res.send(data),
        (error) => {
          console.log(error)
          res.status(500).send({
            error: 'there was an error getting all projects'
          })
        }
      )
  })

router.route('/:project_id')
  .get((req, res) => {
    projects.getById(req.token, req.params.project_id)
      .then(
        (data) => res.send(data),
        (error) => {
          console.log(error)
          res.status(500).send({
            error: `there was an error getting project id: ${req.params.project_id}`
          })
        }
      )
  })

  .put((req, res) => {
    res.send('put requested')
  })

  .post((req, res) => {
    res.send('post requested')
  })

module.exports = router