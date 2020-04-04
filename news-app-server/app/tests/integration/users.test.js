const request = require('supertest');
const mongoose = require('mongoose');
const User = require('../../models/User');

let server;

describe('/users', () => {
  beforeEach(() => {
    server = require('../../../index');
  });

  afterEach(async () => {
    await User.remove({});
    await server.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe('GET', () => {
    it('Should return a list of all users', async () => {
      await User.collection.insertMany([
        {
          username: 'User1',
          email: 'user1@test1.com',
          firstName: 'User',
          surname: 'One',
        },
        {
          username: 'User2',
          email: 'user2@test2.com',
          firstName: 'User',
          surname: 'Two',
        },
        {
          username: 'User3',
          email: 'user3@test3.com',
          firstName: 'User',
          surname: 'Three',
        },
      ]);
      const res = await request(server).get('/users');

      expect(res.status).toBe(200);
      expect(res.body[0].username).toBe('User1');
      expect(res.body[1].email).toBe('user2@test2.com');
      expect(res.body[2].surname).toBe('Three');
    });
  });

  describe('POST', () => {
    const newUser = {
      username: 'User1',
      email: 'user1@test1.com',
      firstName: 'User',
      surname: 'One',
    };

    it('Should create a new user', async () => {
      const res = await request(server).post('/users').send(newUser);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('firstName', 'User');
    });
  });
});
