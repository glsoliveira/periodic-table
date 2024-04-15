"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElements = void 0;
const elementsSymbolsRepository_1 = require("../repositories/elementsSymbolsRepository");
const getElements = () => {
    return (0, elementsSymbolsRepository_1.fetchAllElements)();
};
exports.getElements = getElements;
//# sourceMappingURL=elementsSymbolsService.js.map