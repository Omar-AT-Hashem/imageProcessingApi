import express from "express";

const app = express();

export function testFunc(num: number): number {
  return num * 5;
}

export default {
  app,
  testFunc,
};
