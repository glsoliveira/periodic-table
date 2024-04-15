import {OpenAI} from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string 
  });
  

export async function fetchElementDefinitions(symbols: string[]): Promise<string[]> {
    try {
        const definitions: string[] = [];
        
        for (const symbol of symbols) {
          
            const prompt = `Quais são as propriedades químicas e usos comuns do elemento ${symbol}? Escreva no máximo 200 caracteres`;
            
            const response = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt,
                max_tokens: 150
            });

            if (response && response.choices && response.choices.length > 0 && response.choices[0].text) {
                definitions.push(response.choices[0].text.trim());
            } else {
                definitions.push("No completion found for this element.");
            }
        }

        return definitions;
    } catch (error) {
        console.error('Error fetching element definitions:', error);
        throw error;
    }
}
