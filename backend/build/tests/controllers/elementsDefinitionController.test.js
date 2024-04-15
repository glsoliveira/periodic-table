"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const elementsDefinitionController_1 = require("../../controllers/elementsDefinitionController");
const elementsService = __importStar(require("../../services/elementsDefinitionService"));
jest.mock('../../services/elementsDefinitionService');
describe('getElementDefinitions', () => {
    const mockRequest = (query) => ({
        query
    });
    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockImplementation((statusCode) => res);
        res.json = jest.fn().mockImplementation((data) => res);
        return res;
    };
    it('should respond with a 400 error if no symbols are provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = mockRequest({});
        const res = mockResponse();
        yield (0, elementsDefinitionController_1.getElementDefinitions)(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            error: "Please provide one or more element symbols separated by commas."
        });
    }));
    it('should respond with a 400 error if symbols is not a string', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = mockRequest({ symbols: 123 });
        const res = mockResponse();
        yield (0, elementsDefinitionController_1.getElementDefinitions)(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            error: "Please provide one or more element symbols separated by commas."
        });
    }));
    it('should respond with results if valid symbols are provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const symbols = 'H,He,Li';
        const req = mockRequest({ symbols });
        const res = mockResponse();
        const expectedResults = [
            { symbol: 'H', definition: 'Definition of H' },
            { symbol: 'He', definition: 'Definition of He' },
            { symbol: 'Li', definition: 'Definition of Li' }
        ];
        // Mock the service method correctly
        const mockGetElementDefinitions = elementsService.getElementDefinitions;
        mockGetElementDefinitions.mockResolvedValueOnce('Definition of H')
            .mockResolvedValueOnce('Definition of He')
            .mockResolvedValueOnce('Definition of Li');
        yield (0, elementsDefinitionController_1.getElementDefinitions)(req, res);
        expect(mockGetElementDefinitions).toHaveBeenCalledTimes(3);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            results: expectedResults
        });
    }));
    it('should handle service errors gracefully', () => __awaiter(void 0, void 0, void 0, function* () {
        const symbols = 'H';
        const req = mockRequest({ symbols });
        const res = mockResponse();
        const error = new Error('Service failed');
        const mockGetElementDefinitions = elementsService.getElementDefinitions;
        mockGetElementDefinitions.mockRejectedValueOnce(error);
        yield (0, elementsDefinitionController_1.getElementDefinitions)(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: error.message });
    }));
});
//# sourceMappingURL=elementsDefinitionController.test.js.map