"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementsSymbolsRepository_1 = require("../../repositories/elementsSymbolsRepository");
describe('fetchAllElements', () => {
    it('should return all elements sorted by length in descending order', () => {
        const elements = (0, elementsSymbolsRepository_1.fetchAllElements)();
        let previousLength = elements[0].length;
        for (let i = 1; i < elements.length; i++) {
            expect(elements[i].length).toBeLessThanOrEqual(previousLength);
            previousLength = elements[i].length;
        }
    });
});
//# sourceMappingURL=elementsSymbolsRepository.test.js.map