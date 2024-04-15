"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listElements = void 0;
const elementsSymbolsService_1 = require("../services/elementsSymbolsService");
const listElements = (req, res) => {
    const elements = (0, elementsSymbolsService_1.getElements)();
    res.json({ elements });
};
exports.listElements = listElements;
//# sourceMappingURL=elementsSymbolsController.js.map