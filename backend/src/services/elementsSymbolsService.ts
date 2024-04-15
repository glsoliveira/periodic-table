import { fetchAllElements } from '../repositories/elementsSymbolsRepository';

export const getElements = (): string[] => {
  return fetchAllElements();
}