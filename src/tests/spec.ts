import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('1 Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('2 Test input validators', () => {
  describe('2.1 tests fileName input validator', () => {
    it('2.1.1 invalid input', async () => {
      const response = await request.get('/api/imageProcessor?fileName=lll');
      expect(response.status).toBe(400);
    });
  });

  describe('2.2 tests width input validator', () => {
    it('2.2.1 invalid input', async () => {
      const response = await request.get(
        '/api/imageProcessor?fileName=fjord&width=-4&height=200'
      );
      expect(response.status).toBe(400);
    });
  });

  describe('2.3 tests height input validator', () => {
    it('2.3.1 invalid input', async () => {
      const response = await request.get(
        '/api/imageProcessor?fileName=fjord&width=200&height=-4'
      );
      expect(response.status).toBe(400);
    });
  });
});
