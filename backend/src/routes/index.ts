import express from 'express';
import elementsSymbolsRouter from './elementsSymbolsRoutes';
import elementsDefinitionRouter from './elementsDefinitionRoutes';

const router = express.Router();

router.use('/api', elementsSymbolsRouter);
router.use('/', elementsDefinitionRouter);

export default router;
