import express from 'express';
import { getElementDefinitions } from '../controllers/elementsDefinitionController';
/**
 * @openapi
 * /elements:
 *   get:
 *     summary: Retorna uma lista de elementos da tabela periódica.
 *     responses:
 *       200:
 *         description: Uma lista de elementos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 elements:
 *                   type: array
 *                   items:
 *                     type: string
 */
const elementsDefinitionRouter = express.Router();

elementsDefinitionRouter.get('/elements', getElementDefinitions);

export default elementsDefinitionRouter;