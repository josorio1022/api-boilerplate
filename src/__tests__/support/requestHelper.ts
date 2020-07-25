import { Application } from 'express';
import request from 'supertest';

// custom interface for request helper input
interface RequestHelperInput {
  path: string
  body?: object
  headers?: object
  auth?: string
  query?: object
}

export default (app: Application) => ({
  post: ({
    path = '/',
    body = {},
    headers = {},
    auth = '',
  }: RequestHelperInput) => request(app)
    .post(path)
    .set(headers)
    .set('Authorization', auth)
    .send(body),

  put: ({
    path = '/',
    body = {},
    auth = '',
    headers = {},
  }: RequestHelperInput) => request(app)
    .put(path)
    .set(headers)
    .set('Authorization', auth)
    .send(body),

  get: ({
    path = '/',
    auth = '',
    headers = {},
    query = {},
  }: RequestHelperInput) => request(app)
    .get(path)
    .set(headers)
    .set('Authorization', auth)
    .query(query),
  del: ({ path = '/', auth = '' }) => request(app).delete(path).set('Authorization', auth),
});
