const store = require('../store/datastore');
const initialStoreData = require('../store/data');
const Musician = require('./musician');

beforeAll(done => {
  // initialize store
  musician = new Musician(store);
  musician.initStore(initialStoreData);
  done();
});

describe('Test suite for Musician model', () => {

  test('Verify that store is initialized', () => {
    expect(musician).not.toBeNull();
    expect(musician).toBeInstanceOf(Musician);
  });

});

