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
const elementsDefinitionService_1 = require("../../services/elementsDefinitionService");
const elementsRepository = __importStar(require("../../repositories/elementsDefinitionRepository"));
jest.mock('../../repositories/elementsDefinitionRepository', () => ({
    fetchElementDefinitions: jest.fn()
}));
describe('getElementDefinitions', () => {
    const mockFetchElementDefinitions = elementsRepository.fetchElementDefinitions;
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should return element definitions successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const symbols = ['H', 'He', 'Li'];
        const expectedDefinitions = ['Hydrogen definition', 'Helium definition', 'Lithium definition'];
        mockFetchElementDefinitions.mockResolvedValueOnce(['Hydrogen definition'])
            .mockResolvedValueOnce(['Helium definition'])
            .mockResolvedValueOnce(['Lithium definition']);
        const results = yield (0, elementsDefinitionService_1.getElementDefinitions)(symbols);
        expect(results).toEqual(expectedDefinitions);
        expect(mockFetchElementDefinitions).toHaveBeenCalledTimes(3);
        symbols.forEach((symbol, index) => {
            expect(mockFetchElementDefinitions).toHaveBeenCalledWith([symbol]);
        });
    }));
    it('should throw an error when the repository function fails', () => __awaiter(void 0, void 0, void 0, function* () {
        const symbols = ['U'];
        const error = new Error('Service failed');
        mockFetchElementDefinitions.mockRejectedValueOnce(error);
        yield expect((0, elementsDefinitionService_1.getElementDefinitions)(symbols)).rejects.toThrow(error);
        expect(mockFetchElementDefinitions).toHaveBeenCalledTimes(1);
        expect(mockFetchElementDefinitions).toHaveBeenCalledWith(['U']);
    }));
});
//# sourceMappingURL=elementsDefinitionService.test.js.map