const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  categories: [
    {
      name: 'projects',
      path: 'projects'
    },
    {
      name: 'posts',
      path: 'posts'
    }
  ]
}

const getData = (token) => {
  let data = db[token]

  if (data == null) {
    db[token] = clone(defaultData)
    data = db[token]
  }

  return data
}

const getAll = (token) => {
  return new Promise((res) => {
    res(getData(token))
  })
}

module.exports = {
  getAll
}