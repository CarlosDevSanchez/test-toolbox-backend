const supertest = require('supertest')
const expect = require('chai').expect
const app = require('../src/server')

describe('GET /iecho', () => {
  it('it should has status code 400', (done) => {
    supertest(app).get('/iecho').end(function (err, res) {
      expect(res.statusCode).to.equal(400)
      expect(res.body).to.deep.equal({ text: 'no text' })
      done()
    })
  })
})

describe('GET /iecho', () => {
  it('it should has status code 200 and palindrome false', (done) => {
    supertest(app).get('/iecho?text=test').end(function (err, res) {
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.deep.equal({ text: 'tset', palindrome: false })
      done()
    })
  })
})

describe('GET /iecho', () => {
  it('it should has status code 200 and palindrome true', (done) => {
    supertest(app).get('/iecho?text=Ababa').end(function (err, res) {
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.deep.equal({ text: 'ababA', palindrome: true })
      done()
    })
  })
})
