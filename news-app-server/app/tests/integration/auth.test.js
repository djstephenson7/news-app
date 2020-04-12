const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/User');

describe('/auth', () => {
  let server;
  let user;

  beforeEach(async () => {
    server = require('../../../index');
    user = await User.collection.insertOne({
      username: 'User1',
      email: 'user1@test1.com',
      firstName: 'User1 firstName',
      surname: 'User1 surname',
    });
  });

  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe('POST', () => {
    xit('Should log in a user successfully', async () => {
      const res = await request(server).post('/api/auth').send(user);

      expect(res.status).toBe(200);
    });

    xit('Should return 400 if JWT in invalid', async () => {
      const res = await request(server).post('/api/auth').send(user);

      expect(res.status).toBe(400);
    });
  });
});
