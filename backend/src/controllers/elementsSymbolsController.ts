import { Request, Response } from 'express';
import { getElements } from '../services/elementsSymbolsService';

export const listElements = (req: Request, res: Response): void => {
  const elements = getElements();
  res.json({ elements });  
}