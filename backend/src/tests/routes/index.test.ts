import request from 'supertest';
import express from 'express';
import router from '../../routes/index';

const app = express();
app.use(router); 


jest.mock('../../routes/elementsSymbolsRoutes', () => jest.fn((req, res) => res.send("Symbols Router")));
jest.mock('../../routes/elementsDefinitionRoutes', () => jest.fn((req, res) => res.send("Definitions Router")));

describe('Main Router', () => {
  it('should integrate elementsSymbolsRouter on /api', async () => {
    const response = await request(app).get('/api/elements');

    expect(response.text).toBe("Symbols Router");
  });

  it('should integrate elementsDefinitionRouter on root', async () => {
    const response = await request(app).get('/elements');

    expect(response.text).toBe("Definitions Router");
  });
});
