import express from 'express';
import { listElements } from '../controllers/elementsSymbolsController';

const elementsSymbolsRouter = express.Router();

elementsSymbolsRouter.get('/elements', listElements);

export default elementsSymbolsRouter;