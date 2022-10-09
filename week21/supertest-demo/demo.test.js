// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');

// const app = express();

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });
const request = require('supertest');
const assert = require('assert');

describe("supertest dog.", () => {
  it('should return a 200 status code', () => {
    request('https://dog.ceo')
      .get('/api/breeds/image/random')
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect(function (res) {
        if (!res.body.hasOwnProperty('status')) throw new Error("Expected 'status' key!");
        if (!res.body.hasOwnProperty('message')) throw new Error("Expected 'message' key!");
      })
      .end(function (err, res) {
        if (err) throw err;
      });
  })
});
