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
exports.getElementDefinitions = void 0;
const elementsDefinitionService_1 = require("../services/elementsDefinitionService");
function getElementDefinitions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const symbols = req.query.symbols;
            if (!symbols || typeof symbols !== 'string') {
                res.status(400).json({ error: "Please provide one or more element symbols separated by commas." });
                return;
            }
            const symbolList = symbols.split(',').map(symbol => symbol.trim());
            if (symbolList.length === 0) {
                res.status(400).json({ error: "Please provide one or more element symbols separated by commas." });
                return;
            }
            // Fetch the definition for each symbol in parallel
            const promises = symbolList.map((symbol) => __awaiter(this, void 0, void 0, function* () {
                const definition = yield (0, elementsDefinitionService_1.getElementDefinitions)([symbol]); // Pass symbol as an array
                return { symbol, definition };
            }));
            // Wait for all promises to resolve
            const results = yield Promise.all(promises);
            res.json({ success: true, results });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
exports.getElementDefinitions = getElementDefinitions;
//# sourceMappingURL=elementsDefinitionController.js.map