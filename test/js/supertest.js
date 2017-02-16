const request = require('supertest');
const path = require('path');

// const app = require('../../');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

/**
* include an assertion library here so that you can make assertions other than those
* provided by supertest. Choose whichever assertion library suits you.
*/
// const expect = require('expect');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Route integration', () => {
  // describe('/', () => {
  //   describe('GET', () => {
  //     it('responds with 200 status and text/html content type', done => {
  //       request(HOST)
  //         .get('/')
  //         .expect('Content-Type', /text\/html/)
  //         .expect(200, done);
  //     });
  //   });
  // });

  describe('/questions', () => {
    describe('GET', () => {
      it('response with 200 status and application/json content type', done => {
        request(HOST)
          .get('/questions')
          .expect('Content-Type', /application\/json/)
          .expect(200, done);
      });

      // it('games from appropriate json file in server/db/ are in body of response', done => {
      //   // You'll need to inspect the body of the response and ensure it contains the games list.
      //   // Might need to read the games json file in first to make sure the games in the response
      //   // match the games in the database.
      //   const gameList = JSON.parse(fs.readFileSync(devJsonFile));
      //   request(HOST)
      //     .get('/games')
      //     .expect(200)
      //     .end((err, res) => {
      //       expect(JSON.stringify(res.body)).to.equal(JSON.stringify(gameList));
      //       done();
      //     })
      // });
    });

    // describe('POST', () => {
    //   it('responds to valid request with 200 status and application/json content type', done => {
    //     request(HOST)
    //       .post('/games')
    //       .send({ winner: 'X' })
    //       .expect(200)
    //       .expect('Content-Type', /application\/json/);
    //       done();
    //   });

    //   it('responds to a valid request with the item that was created in the DB', done => {
    //     // Hint: inspect the response body and make sure it contains the winner, createdAt, and
    //     // id fields.
    //     function hasKeys(res) {
    //       if (!('winner' in res.body)) return false;
    //       if (!('createdAt' in res.body)) return false;
    //       if (!('id' in res.body)) return false;
    //     }

    //     const winner = { winner: 'X' };
    //     request(HOST)
    //       .post('/games')
    //       .send(winner)
    //       .expect(200)
    //       .expect(hasKeys)
    //       .end(done)
    //   });

    //   it('responds to invalid request with 400 status and error message in body', done => {
    //     // This feature does not exist yet. Follow test-driven-development here! See description
    //     // in readme.
    //     // Hint: An invalid request is a POST request in which the POST body does not contain
    //     // a JSON object with a "winner" key, or if the body contains fields other than "winner"
    //     const brokenwinner = { winner: 'X', loser: 'O' };

    //     request(HOST)
    //       .post('/games')
    //       .send(brokenwinner)
    //       .expect(400)
    //       .end(done)
    //   });
    // });
  });
});
