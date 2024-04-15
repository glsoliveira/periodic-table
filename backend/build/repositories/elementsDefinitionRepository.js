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
exports.fetchElementDefinitions = void 0;
const openai_1 = require("openai");
const openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
function fetchElementDefinitions(symbols) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const definitions = [];
            for (const symbol of symbols) {
                const prompt = `Quais são as propriedades químicas e usos comuns do elemento ${symbol}? Escreva no máximo 200 caracteres`;
                const response = yield openai.completions.create({
                    model: "gpt-3.5-turbo-instruct",
                    prompt,
                    max_tokens: 150
                });
                if (response && response.choices && response.choices.length > 0 && response.choices[0].text) {
                    definitions.push(response.choices[0].text.trim());
                }
                else {
                    definitions.push("No completion found for this element.");
                }
            }
            return definitions;
        }
        catch (error) {
            console.error('Error fetching element definitions:', error);
            throw error;
        }
    });
}
exports.fetchElementDefinitions = fetchElementDefinitions;
//# sourceMappingURL=elementsDefinitionRepository.js.map