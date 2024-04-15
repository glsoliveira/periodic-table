"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const elementsSymbolsRoutes_1 = __importDefault(require("./elementsSymbolsRoutes"));
const elementsDefinitionRoutes_1 = __importDefault(require("./elementsDefinitionRoutes"));
const router = express_1.default.Router();
router.use('/api', elementsSymbolsRoutes_1.default);
router.use('/', elementsDefinitionRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map