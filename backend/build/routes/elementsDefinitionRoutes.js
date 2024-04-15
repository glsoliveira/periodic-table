"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const elementsDefinitionController_1 = require("../controllers/elementsDefinitionController");
/**
 * @openapi
 * /elements:
 *   get:
 *     summary: Retorna uma lista de elementos da tabela periódica.
 *     responses:
 *       200:
 *         description: Uma lista de elementos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 elements:
 *                   type: array
 *                   items:
 *                     type: string
 */
const elementsDefinitionRouter = express_1.default.Router();
elementsDefinitionRouter.get('/elements', elementsDefinitionController_1.getElementDefinitions);
exports.default = elementsDefinitionRouter;
//# sourceMappingURL=elementsDefinitionRoutes.js.map