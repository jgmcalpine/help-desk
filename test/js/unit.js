// Here we will be unit testing the 3 database functions from server/db/games.js
const db = require('../../server/db/games.js');
const fs = require('fs');
const path = require('path');
const testJsonFile = path.join(__dirname, '../../server/db/games.test.json');
const expect = require('expect');
const sinon = require('sinon');

describe('db unit tests', () => {
  // Mocha runs the "before" function once, before any tests are executed.
  // If you need to perform an asynchronous operation during a Mocha function, then
  // you have two options. One is to return a promise and Mocha will honor that promise,
  // not continuing to the next step until the Promise is resolved. The second way is
  // to provide a callback function named "done" (the approach I'm using below).
  // If you provide the callback, then Mocha will not move on to the next step until
  // the "done" callback has been called. Here, I'm passing "done" directly to the
  // fs.writeFile function which will call done as soon as the file has been written.
  // This way, the tests won't start until the "database" file has been reset to an empty Array!
  before(() => {
    // Make sure "db" is empty
    fs.writeFileSync(testJsonFile, JSON.stringify([], null, 2));
    db.reset();
  });

  // In Mocha we use the "describe" function to seperate our tests into sections.
  // The main purpose here is to make the console output easier to read. Each test
  // inside of a describe block will have its output indented inside of its description.
  // You can also place "before", "beforeEach", "after", and "afterEach" functions
  // inside of "describe" blocks and they will only run for tests inside the describe block.
  describe('#create', () => {
    
    it('valid game is written to json file', () => {
      const game = { winner: 'X' };
      db.create(game);
      const gameList = JSON.parse(fs.readFileSync(testJsonFile));
      expect(gameList.length).toEqual(1);
      expect(gameList[0].winner).toEqual('X');
    });

    // TODO: Finish unit testing the create function

    it('game has unique ID field added', () => {
      const gameList = JSON.parse(fs.readFileSync(testJsonFile));
      expect(gameList[0]).toContainKey('id');
    });

    it('adding a second game does not overwrite first game', () => {
      const game = { winner: 'X' };
      db.create(game);
      const gameList = JSON.parse(fs.readFileSync(testJsonFile));
      expect(gameList.length).toEqual(2);
    });

    it('if winner field is not provided, game is not added and an error is returned', () => {
      // TODO: Practice test-driven development here. Currently the create function does
      // not return an error if the winner field is not provided. Follow the TDD approach:
      //   1. Write a test that tests that an error is returned if the "winner" field is not provided
      //   2. Run the tests and make sure your new test fails (since this feature doesn't exist yet)
      //   3. Add the functionality to create function in server/db/games.js to make your test pass
      const game = {};
      expect(db.create(game)).toEqual(false);
    });

    it('game has createdAt date for the current time', () => {
      // Hint: To test this in-depth, try mocking the date with Sinon.js
      // This way you can set a random date, create a new game in the database,
      // and then assert that the game in the database matches the date you set exactly!
      // let create = sinon.stub(db, 'create');
      // create.yields();
      let fakeTimer = sinon.useFakeTimers();
      const now = new Date();
      // db.create({ winner: 'X', createdAt: now });
      const user = db.create({ winner: 'X' });
      expect(user.createdAt).toEqual(now.toISOString());
      fakeTimer.restore();
    });
  });

  // TODO: Unit test the #find and #drop functions

  describe('#find', () => {
    it('returns list of all games from the json file', () => {
      const gameList = JSON.parse(fs.readFileSync(testJsonFile));
      expect(db.find()).toEqual(gameList);
    });

    it('works of the list of games is empty', () => {
      fs.writeFileSync(testJsonFile, JSON.stringify([], null, 2));
      const ourGameList = JSON.parse(fs.readFileSync(testJsonFile));
      db.reset();
      expect(db.find()).toEqual(ourGameList);
    });
  });

  describe('#drop', () => {
    it('writes an empty array to the json file', () => {
      db.drop();
      const ourGameList = JSON.parse(fs.readFileSync(testJsonFile));
      expect(ourGameList).toEqual([]);
    });
  });
});
