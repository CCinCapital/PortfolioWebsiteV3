const clone = require('clone')

let db = {}

const defaultData = {
  "1" : {
    id: '1',
    timestamp: 1467166872634,
    title: 'This is a mock title',
    body: 'There would be a markdown article here',
    author: 'Can Chen',
    category: 'work',
    hidden: false,
  },
  "2" : {
    id: '2',
    timestamp: 1468479767190,
    title: 'title mock a is this',
    body: 'There would be a markdown article here',
    author: 'Can Chen',
    category: 'life',
    hidden: false,
  },
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
    const posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => !posts[key].hidden)
    res(filtered_keys.map(key => posts[key]))
  })
}

module.exports = {
  getAll
}