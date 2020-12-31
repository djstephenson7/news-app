const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/User');

describe('/auth', () => {
  let server;

  beforeEach(async () => {
    server = require('../../../index');
    await User.collection.insertOne({
      email: 'user1@test1.com',
      password: 'password',
      firstName: 'User1 firstName',
      surname: 'User1 surname',
    });

    token = new User().generateAuthToken();
  });

  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  const login = async (email, password) =>
    request(server).post('/api/auth').send({ email, password });

  describe('POST', () => {
    xit('Should log in a user successfully', async () => {
      const res = await login('user1@test1.com', 'password');

      expect(res.status).toBe(200);
    });

    it('Should return 400 if invalid password', async () => {
      const res = await login('user1@test1.com', 'Incorrect password');

      expect(res.status).toBe(401);
    });
  });
});
