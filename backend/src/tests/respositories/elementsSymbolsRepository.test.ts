import { fetchAllElements } from '../../repositories/elementsSymbolsRepository';

describe('fetchAllElements', () => {
  it('should return all elements sorted by length in descending order', () => {
    const elements = fetchAllElements();

    let previousLength = elements[0].length;
    for (let i = 1; i < elements.length; i++) {
      expect(elements[i].length).toBeLessThanOrEqual(previousLength);
      previousLength = elements[i].length;
    }
  });
});
