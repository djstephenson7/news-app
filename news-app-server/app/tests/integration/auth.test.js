const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/User');

describe('/auth', () => {
  let server;
  let user;
  let token;

  beforeEach(async () => {
    server = require('../../../index');
    await User.collection.insertOne({
      username: 'User1',
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

  const login = async () =>
    request(server)
      .post('/api/auth')
      .send({ username: 'User1', password: 'password' });

  describe('POST', () => {
    it('Should log in a user successfully', async () => {
      const res = await login();

      expect(res.status).toBe(200);
    });

    it('Should return 400 if invalid username', async () => {
      const res = await request(server)
        .post('/api/auth')
        .send({ username: 'Incorrect username', password: 'password' });

      expect(res.status).toBe(400);
    });

    it('Should return 400 if invalid password', async () => {
      const res = await request(server)
        .post('/api/auth')
        .send({ username: 'User1', password: 'Incorrect password' });

      expect(res.status).toBe(400);
    });
  });
});
