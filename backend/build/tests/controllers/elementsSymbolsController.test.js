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
const elementsSymbolsController_1 = require("../../controllers/elementsSymbolsController");
const elementsService = __importStar(require("../../services/elementsSymbolsService"));
jest.mock('../../services/elementsSymbolsService');
describe('listElements Controller', () => {
    let mockRequest;
    let mockResponse;
    let jsonResponse;
    beforeEach(() => {
        mockRequest = {};
        jsonResponse = {};
        mockResponse = {
            json: jest.fn().mockImplementation((result) => {
                jsonResponse = result;
            })
        };
    });
    it('should return a list of elements', () => __awaiter(void 0, void 0, void 0, function* () {
        const elements = ['H', 'He', 'Li'];
        jest.spyOn(elementsService, 'getElements').mockReturnValue(elements);
        (0, elementsSymbolsController_1.listElements)(mockRequest, mockResponse);
        expect(elementsService.getElements).toHaveBeenCalled();
        expect(mockResponse.json).toHaveBeenCalledWith({ elements });
    }));
    it('should handle errors from the elements service', () => __awaiter(void 0, void 0, void 0, function* () {
        const error = new Error('Service failed');
        jest.spyOn(elementsService, 'getElements').mockImplementation(() => {
            throw error;
        });
        expect(() => (0, elementsSymbolsController_1.listElements)(mockRequest, mockResponse)).toThrow('Service failed');
    }));
});
//# sourceMappingURL=elementsSymbolsController.test.js.map