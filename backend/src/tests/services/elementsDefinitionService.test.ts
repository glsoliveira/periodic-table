import { getElementDefinitions } from '../../services/elementsDefinitionService';
import * as elementsRepository from '../../repositories/elementsDefinitionRepository';


jest.mock('../../repositories/elementsDefinitionRepository', () => ({
    fetchElementDefinitions: jest.fn()
  }));
  
  describe('getElementDefinitions', () => {
    const mockFetchElementDefinitions = elementsRepository.fetchElementDefinitions as jest.Mock;
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should return element definitions successfully', async () => {
      const symbols = ['H', 'He', 'Li'];
      const expectedDefinitions = ['Hydrogen definition', 'Helium definition', 'Lithium definition'];
  
      mockFetchElementDefinitions.mockResolvedValueOnce(['Hydrogen definition'])
                                 .mockResolvedValueOnce(['Helium definition'])
                                 .mockResolvedValueOnce(['Lithium definition']);
  
      const results = await getElementDefinitions(symbols);
  
      expect(results).toEqual(expectedDefinitions);
      expect(mockFetchElementDefinitions).toHaveBeenCalledTimes(3);
      symbols.forEach((symbol, index) => {
        expect(mockFetchElementDefinitions).toHaveBeenCalledWith([symbol]);
      });
    });
    it('should throw an error when the repository function fails', async () => {
      const symbols = ['U'];
      const error = new Error('Service failed');
  
      mockFetchElementDefinitions.mockRejectedValueOnce(error);
  
      await expect(getElementDefinitions(symbols)).rejects.toThrow(error);
  
      expect(mockFetchElementDefinitions).toHaveBeenCalledTimes(1);
      expect(mockFetchElementDefinitions).toHaveBeenCalledWith(['U']);
    });
  });