import { fetchElementDefinitions } from '../../repositories/elementsDefinitionRepository'; 
import { OpenAI } from 'openai';

jest.mock('openai', () => {
    const mockCreate = jest.fn(); 
    return {
        OpenAI: jest.fn(() => ({
            completions: {
                create: mockCreate
            }
        }))
    };
});

describe('fetchElementDefinitions', () => {
    let mockCreate:any;
    
    beforeEach(() => {
        
        mockCreate = new OpenAI({ apiKey: 'fake_api_key' }).completions.create;
        mockCreate.mockClear(); 
    });

    it('should return definitions for each symbol', async () => {
        const symbols = ['H', 'He'];
        const expectedDefinitions = ['Definition of H', 'Definition of He'];
        
        mockCreate.mockResolvedValueOnce({
            choices: [{ text: 'Definition of H' }]
        }).mockResolvedValueOnce({
            choices: [{ text: 'Definition of He' }]
        });

        const results = await fetchElementDefinitions(symbols);

        expect(mockCreate).toHaveBeenCalledTimes(2);
        expect(results).toEqual(expectedDefinitions);
    });
    it('should return a default message if no completion is found', async () => {
        const symbols = ['Xe'];
        mockCreate.mockResolvedValueOnce({
        choices: [] 
        });

        const results = await fetchElementDefinitions(symbols);

        expect(mockCreate).toHaveBeenCalledTimes(1);
        expect(results).toEqual(['No completion found for this element.']);
    });
    it('should throw an error if the API call fails', async () => {
        const symbols = ['U'];
        const apiError = new Error('API Error');
        mockCreate.mockRejectedValueOnce(apiError);

        await expect(fetchElementDefinitions(symbols)).rejects.toThrow('API Error');

        expect(mockCreate).toHaveBeenCalledTimes(1);
    });
});
