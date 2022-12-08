// import supertest from 'supertest';
// import app from '../index';
import { testFunc } from "../index";

// const request = supertest(app);
// describe('Test endpoint responses', () => {
//     it('gets the api endpoint', async (done) => {
//         const response = await request.get('/api');
//         expect(response.status).toBe(200);
//         done();
//     }
// )});

it("should multiply a number by 5", () => {
  expect(testFunc(5)).toEqual(25);
});
