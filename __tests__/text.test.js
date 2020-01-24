require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  describe('Text Tests', () =>{
    it('can create a new text', () => {
      return request(app)
        .post('/api/v1/text')
        .send('This is text')
        .then(res => {
          expect(res.body).toEqual({
            _id: expect.any(String),
            text: 'This is text',
            __v: 0
          });
        });
    });
  });
});
