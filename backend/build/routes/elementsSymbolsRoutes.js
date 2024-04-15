"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const elementsSymbolsController_1 = require("../controllers/elementsSymbolsController");
const elementsSymbolsRouter = express_1.default.Router();
elementsSymbolsRouter.get('/elements', elementsSymbolsController_1.listElements);
exports.default = elementsSymbolsRouter;
//# sourceMappingURL=elementsSymbolsRoutes.js.map