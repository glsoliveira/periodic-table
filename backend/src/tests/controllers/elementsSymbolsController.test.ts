import { Request, Response } from 'express';
import { listElements } from '../../controllers/elementsSymbolsController';
import * as elementsService from '../../services/elementsSymbolsService';

jest.mock('../../services/elementsSymbolsService');

describe('listElements Controller', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let jsonResponse: any;

    beforeEach(() => {
        mockRequest = {};
        jsonResponse = {};
        mockResponse = {
            json: jest.fn().mockImplementation((result) => {
                jsonResponse = result;
            })
        };
    });

    it('should return a list of elements', async () => {
        const elements = ['H', 'He', 'Li'];
        jest.spyOn(elementsService, 'getElements').mockReturnValue(elements);

        listElements(mockRequest as Request, mockResponse as Response);

        expect(elementsService.getElements).toHaveBeenCalled();
        expect(mockResponse.json).toHaveBeenCalledWith({ elements });
    });
    it('should handle errors from the elements service', async () => {
        const error = new Error('Service failed');
        jest.spyOn(elementsService, 'getElements').mockImplementation(() => {
            throw error;
        });

        expect(() => listElements(mockRequest as Request, mockResponse as Response)).toThrow('Service failed');
    });
});
