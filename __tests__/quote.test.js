require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Quote = require('../lib/models/Quote');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  // beforeEach(async() => {
  //   await Text.create({ text: 'This is text' });
  // });

  afterAll(() => {
    return mongoose.connection.close();
  });

  describe('Quote Tests', () =>{

    it('can create a new quote', () => {
      return request(app)
        .post('/api/v1/quotes')
        .send({ quote: 'This is a quote' })
        .then(res => {
          expect(res.body).toEqual({
            _id: expect.any(String),
            quote: 'This is a quote',
            __v: 0
          });
        });
    });

    // it('can get all texts', () => {
    //   return request(app)
    //     .get('/api/v1/texts')
    //     .then(res => {
    //       expect(res.body).toEqual([{
    //         _id: expect.any(String),
    //         text: 'This is text',
    //         __v: 0
    //       }]);
    //     });
    // });


  });
});
