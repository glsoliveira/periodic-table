import { Request, Response } from 'express';
import { getElementDefinitions } from '../../controllers/elementsDefinitionController';
import * as elementsService from '../../services/elementsDefinitionService';

jest.mock('../../services/elementsDefinitionService'); 

describe('getElementDefinitions', () => {
  
  type MockResponse = {
    [Property in keyof Response]: jest.Mock<any, any>;
  };
  const mockRequest = (query: Partial<Request['query']>) => ({
    query
  }) as Partial<Request>;
  const mockResponse = (): MockResponse & Response => {
    const res: MockResponse = {} as MockResponse;
    res.status = jest.fn().mockImplementation((statusCode: number) => res);
    res.json = jest.fn().mockImplementation((data: any) => res);
    return res as MockResponse & Response;
  };
  it('should respond with a 400 error if no symbols are provided', async () => {
    const req = mockRequest({}); 
    const res = mockResponse();

    await getElementDefinitions(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Please provide one or more element symbols separated by commas."
    });
  });
  it('should respond with a 400 error if symbols is not a string', async () => {
  
    const req = mockRequest({ symbols: 123 as any }); 
    const res = mockResponse();
  
    await getElementDefinitions(req as Request, res as Response);
  
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Please provide one or more element symbols separated by commas."
    });
  });
  it('should respond with results if valid symbols are provided', async () => {
    const symbols = 'H,He,Li';
    const req = mockRequest({ symbols });
    const res = mockResponse();
    const expectedResults = [
      { symbol: 'H', definition: 'Definition of H' },
      { symbol: 'He', definition: 'Definition of He' },
      { symbol: 'Li', definition: 'Definition of Li' }
    ];

    // Mock the service method correctly
    const mockGetElementDefinitions = elementsService.getElementDefinitions as jest.Mock;
    mockGetElementDefinitions.mockResolvedValueOnce('Definition of H')
                             .mockResolvedValueOnce('Definition of He')
                             .mockResolvedValueOnce('Definition of Li');

    await getElementDefinitions(req as Request, res as Response);

    expect(mockGetElementDefinitions).toHaveBeenCalledTimes(3);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      results: expectedResults
    });
  });
  it('should handle service errors gracefully', async () => {
    const symbols = 'H';
    const req = mockRequest({ symbols });
    const res = mockResponse();
    const error = new Error('Service failed');
  
    const mockGetElementDefinitions = elementsService.getElementDefinitions as jest.Mock;
    mockGetElementDefinitions.mockRejectedValueOnce(error);
   
    await getElementDefinitions(req as Request, res as Response);
  
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: error.message });
  });
});
