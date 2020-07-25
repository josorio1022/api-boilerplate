import { OK } from 'http-status-codes';

import { Response } from 'supertest';
import requestHelper from '../../../support/requestHelper';
import app from '../../../../config/app';

const { get } = requestHelper(app);

describe('handlers#index', () => {
  let response: Response;

  beforeAll(async () => {
    response = await get({
      path: '/api/',
    });
  });

  it('returns http 200', () => {
    expect(response.status).toBe(OK);
  });

  it('returns a valid response', () => {
    expect(response.body).toBeObject();
    expect(response.body).toContainKey('message');
  });
});
