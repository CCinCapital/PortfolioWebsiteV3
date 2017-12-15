const clone = require('clone')

let db = {}

const defaultData = {
  '1': {
    id: '1',
    path: 'smart-parking-services',
    data: {
      name: 'Smart Parking Services',
      year: 2016,
      members: 6,
      type: 'school project',
      description: 'Android App for SPS',
      tags: ['Java', 'Mobile App', 'Android'],
      iconPath: '/img/smart-parking-services.png',
    },
    deleted: false,
  },
  '2': {
    id: '2',
    path: 'portfolio-website-v1',
    data: {
      name: 'Portfolio Website V1',
      year: 2016,
      members: 1,
      type: 'personal project',
      description: 'Portfolio Website V1',
      tags: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
      iconPath: '/img/portfolio-website-v1.png',
    },
    deleted: false,
  },
  '3': {
    id: '3',
    path: 'fpga-tug-of-war',
    data: {
      name: 'FPGA Tug of War',
      year: 2015,
      members: 2,
      type: 'school project',
      description: 'FPGA tug of war game',
      tags: ['Verilog', 'Dev Board'],
      iconPath: '/img/fpga-tug-of-war.png',
    },
    deleted: false,
  }
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

const getById = (token, id) => {
  return new Promise((res) => {
    let projects = getData(token)
    res(
      projects[id].deleted
        ? {}
        : projects[id]
    )
  })
}

module.exports = {
  getAll,
  getById
}