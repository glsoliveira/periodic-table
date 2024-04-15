import express, { Request, Response } from 'express';
import elementsRouter from './elementsAPI';
import { getElementDefinitions } from '../controllers/elementsController';

const router = express.Router();

// Keep existing routes
router.use('/api', elementsRouter);

// Add new route for getting definitions of multiple elements
router.get('/elements', getElementDefinitions);

export default router;
