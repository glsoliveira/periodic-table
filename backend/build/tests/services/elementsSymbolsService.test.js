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
Object.defineProperty(exports, "__esModule", { value: true });
// Importações necessárias
const elementsSymbolsService_1 = require("../../services/elementsSymbolsService");
const repository = __importStar(require("../../repositories/elementsSymbolsRepository"));
// Descrever o grupo de testes
describe('getElements', () => {
    // Criar um mock para fetchAllElements
    const mockFetchAllElements = jest.spyOn(repository, 'fetchAllElements');
    beforeEach(() => {
        // Limpar as chamadas do mock antes de cada teste
        mockFetchAllElements.mockClear();
    });
    it('should return all elements from the repository', () => {
        // Definir o valor que o mock deve retornar
        const expectedElements = ["H", "He", "Li"];
        mockFetchAllElements.mockReturnValue(expectedElements);
        // Chamar a função getElements
        const result = (0, elementsSymbolsService_1.getElements)();
        // Verificar se fetchAllElements foi chamado
        expect(mockFetchAllElements).toHaveBeenCalled();
        // Verificar se o resultado é o esperado
        expect(result).toEqual(expectedElements);
    });
});
//# sourceMappingURL=elementsSymbolsService.test.js.map