"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import supertest from 'supertest';
// import app from '../index';
const index_1 = require("../index");
// const request = supertest(app);
// describe('Test endpoint responses', () => {
//     it('gets the api endpoint', async (done) => {
//         const response = await request.get('/api');
//         expect(response.status).toBe(200);
//         done();
//     }
// )});
it("should multiply a number by 5", () => {
    expect((0, index_1.testFunc)(5)).toEqual(25);
});
