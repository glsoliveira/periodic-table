import request from 'supertest';
import express from 'express';
import elementsDefinitionRouter from '../../routes/elementsDefinitionRoutes';
import * as elementsDefinitionController from '../../controllers/elementsDefinitionController';


const app = express();
app.use(express.json());
app.use('/api', elementsDefinitionRouter); 

jest.mock('../../controllers/elementsDefinitionController', () => ({
  getElementDefinitions: jest.fn((req, res) => res.status(200).send("OK")),
}));

describe('Elements Definition Routes', () => {
  describe('GET /elements', () => {
    it('should call getElementDefinitions controller', async () => {
      const { getElementDefinitions } = elementsDefinitionController;
      
      const response = await request(app).get('/api/elements');

      expect(getElementDefinitions).toHaveBeenCalled();
      
      expect(response.status).toBe(200);
      expect(response.text).toBe("OK");
    });
  });
});
