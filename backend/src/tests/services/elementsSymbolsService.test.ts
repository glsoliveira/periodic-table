// Importações necessárias
import { getElements } from '../../services/elementsSymbolsService';
import * as repository from '../../repositories/elementsSymbolsRepository';

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
    const result = getElements();

    // Verificar se fetchAllElements foi chamado
    expect(mockFetchAllElements).toHaveBeenCalled();

    // Verificar se o resultado é o esperado
    expect(result).toEqual(expectedElements);
  });
});
