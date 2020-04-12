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
      password: 'Password1',
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

  const login = () =>
    request(server)
      .post('/api/auth')
      .set('x-auth-token', token)
      .send({ email: 'user1@test1.com', password: 'Password1' });

  describe('POST', () => {
    it('Should log in a user successfully', async () => {
      const res = await login();

      expect(res.status).toBe(200);
    });

    xit('Should return 401 if no JWT present', async () => {
      const res = await request(server).post('/api/auth').send(user);

      expect(res.status).toBe(401);
    });
  });
});
