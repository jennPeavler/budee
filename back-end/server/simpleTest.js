const environment = process.env.NODE_ENV || 'development';
// const configuration = require('../knexfile')[environment];
// const database = require('knex')(configuration);

const doSimpleTest = (req, res) => {
  const testData = {
    first: 'Jennifer',
    last: 'Peavler'
  }
  res.status(200).json(testData)
}

module.exports = {
  doSimpleTest
}
