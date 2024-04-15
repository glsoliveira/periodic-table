import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });
import request from 'supertest';
import app from '../../index';  // Ensure this exports the express app

describe('Elements Controller', () => {
    describe('GET /api/elements', () => {
        it('should return 400 if no symbols are provided', async () => {
            const response = await request(app).get('/api/elements');
            expect(response.status).toBe(400);
            expect(response.body).toEqual({
                error: "Please provide one or more element symbols separated by commas."
            });
        });
   

        // it('should return element definitions successfully', async () => {
        //     const symbols = 'H,O';
        //     const mockDefinition = [
        //         { symbol: 'H', definition: 'Hydrogen is ...' },
        //         { symbol: 'O', definition: 'Oxygen is ...' }
        //     ];

        //     jest.mock('../../src/services/elementsService', () => ({
        //         getElementDefinitions: jest.fn().mockResolvedValue(mockDefinition)
        //     }));

        //     const response = await request(app).get(`/api/elements?symbols=${symbols}`);
        //     expect(response.status).toBe(200);
        //     expect(response.body.success).toBe(true);
        //     expect(response.body.results).toEqual(mockDefinition);
        // });
    });
});
