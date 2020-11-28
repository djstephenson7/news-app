const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/User');

describe('/users', () => {
  let server;

  beforeEach(async () => {
    server = require('../../../index');
  });

  afterEach(async () => {
    await User.deleteMany({});
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
          password: 'password1',
          firstName: 'User1 firstName',
          surname: 'User1 surname',
        },
        {
          username: 'User2',
          email: 'user2@test2.com',
          password: 'password2',
          firstName: 'User2 firstName',
          surname: 'User2 surname',
        },
        {
          username: 'User3',
          email: 'user3@test3.com',
          password: 'password3',
          firstName: 'User3 firstName',
          surname: 'User3 surname',
        },
      ]);
      const res = await request(server).get('/api/users');

      expect(res.status).toBe(200);
      expect(res.body[0].username).toBe('User1');
      expect(res.body[1].email).toBe('user2@test2.com');
      expect(res.body[2].surname).toBe('User3 surname');
    });
  });

  describe('POST', () => {
    let newUser;

    beforeEach(() => {
      newUser = {
        username: 'User1',
        email: 'user1@test1.com',
        password: 'Password',
        firstName: 'User1 firstName',
        surname: 'User1 surname',
      };
    });

    it('Should create a new user', async () => {
      const res = await request(server).post('/api/users').send(newUser);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('id');
      expect(res.body.token).toBeTruthy();
    });

    it('Should return invalid if email is fewer than 5 chars', async () => {
      newUser.email = '1234';
      const res = await request(server).post('/api/users').send(newUser);

      expect(res.status).toBe(400);
    });

    it('Should return invalid if email is not in valid format', async () => {
      newUser.email = 'emailAtEmail.com';
      const res = await request(server).post('/api/users').send(newUser);

      expect(res.status).toBe(400);
    });

    it('Should return invalid if username is more than 50 chars', async () => {
      newUser.username = 'a'.repeat(51);
      const res = await request(server).post('/api/users').send(newUser);

      expect(res.status).toBe(400);
    });
  });
});
