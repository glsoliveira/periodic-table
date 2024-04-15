// Importações necessárias
import request from 'supertest';
import express from 'express';
import elementsSymbolsRouter from '../../routes/elementsSymbolsRoutes';
import * as elementsSymbolsController from '../../controllers/elementsSymbolsController';


const app = express();
app.use(express.json());
app.use('/api', elementsSymbolsRouter);  // Assumindo que a rota base será '/api'

// Mockar o controlador
jest.mock('../../controllers/elementsSymbolsController', () => ({
  listElements: jest.fn((req, res) => res.status(200).send("OK")),
}));

describe('Elements Symbols Routes', () => {
  describe('GET /elements', () => {
    it('should call listElements controller', async () => {
      const { listElements } = elementsSymbolsController;
      
      // Fazer a requisição para a rota
      const response = await request(app).get('/api/elements');

      // Verificar se o controlador foi chamado
      expect(listElements).toHaveBeenCalled();
      // Verificar a resposta do servidor
      expect(response.status).toBe(200);
      expect(response.text).toBe("OK");
    });
  });
});
