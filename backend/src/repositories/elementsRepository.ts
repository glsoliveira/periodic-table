import {OpenAI} from 'openai';

// Create an instance of the OpenAI client with the API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string // Assume que o valor nunca será undefined
  });
  

export async function fetchElementDefinitions(symbols: string[]): Promise<string[]> {
    try {
        const definitions: string[] = [];
        
        // Fetch the definition for each symbol
        for (const symbol of symbols) {
            // Create the prompt for the current symbol
            const prompt = `Quais são as propriedades químicas e usos comuns do elemento ${symbol}? Escreva no máximo 200 caracteres`;
            
            // Perform the call to the completions endpoint
            const response = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt,
                max_tokens: 150
            });


            // Checking and handling the response from the API
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
