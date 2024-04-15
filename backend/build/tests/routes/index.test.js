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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../../routes/index"));
const app = (0, express_1.default)();
app.use(index_1.default);
jest.mock('../../routes/elementsSymbolsRoutes', () => jest.fn((req, res) => res.send("Symbols Router")));
jest.mock('../../routes/elementsDefinitionRoutes', () => jest.fn((req, res) => res.send("Definitions Router")));
describe('Main Router', () => {
    it('should integrate elementsSymbolsRouter on /api', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/api/elements');
        expect(response.text).toBe("Symbols Router");
    }));
    it('should integrate elementsDefinitionRouter on root', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/elements');
        expect(response.text).toBe("Definitions Router");
    }));
});
//# sourceMappingURL=index.test.js.map