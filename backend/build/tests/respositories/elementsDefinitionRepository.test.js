"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const elementsDefinitionRepository_1 = require("../../repositories/elementsDefinitionRepository");
const openai_1 = require("openai");
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
    let mockCreate;
    beforeEach(() => {
        mockCreate = new openai_1.OpenAI({ apiKey: 'fake_api_key' }).completions.create;
        mockCreate.mockClear();
    });
    it('should return definitions for each symbol', () => __awaiter(void 0, void 0, void 0, function* () {
        const symbols = ['H', 'He'];
        const expectedDefinitions = ['Definition of H', 'Definition of He'];
        mockCreate.mockResolvedValueOnce({
            choices: [{ text: 'Definition of H' }]
        }).mockResolvedValueOnce({
            choices: [{ text: 'Definition of He' }]
        });
        const results = yield (0, elementsDefinitionRepository_1.fetchElementDefinitions)(symbols);
        expect(mockCreate).toHaveBeenCalledTimes(2);
        expect(results).toEqual(expectedDefinitions);
    }));
    it('should return a default message if no completion is found', () => __awaiter(void 0, void 0, void 0, function* () {
        const symbols = ['Xe'];
        mockCreate.mockResolvedValueOnce({
            choices: []
        });
        const results = yield (0, elementsDefinitionRepository_1.fetchElementDefinitions)(symbols);
        expect(mockCreate).toHaveBeenCalledTimes(1);
        expect(results).toEqual(['No completion found for this element.']);
    }));
    it('should throw an error if the API call fails', () => __awaiter(void 0, void 0, void 0, function* () {
        const symbols = ['U'];
        const apiError = new Error('API Error');
        mockCreate.mockRejectedValueOnce(apiError);
        yield expect((0, elementsDefinitionRepository_1.fetchElementDefinitions)(symbols)).rejects.toThrow('API Error');
        expect(mockCreate).toHaveBeenCalledTimes(1);
    }));
});
//# sourceMappingURL=elementsDefinitionRepository.test.js.map