import { fetchElementDefinitions } from '../repositories/elementsRepository';

export async function getElementDefinitions(symbols: string[]): Promise<string[]> {
    try {
              
        // Fetch the definition for each symbol in parallel
        const promises = symbols.map(async symbol => {
            const definition = await fetchElementDefinitions([symbol]); 
            // console.log(definition)
            return definition[0];
        });

        // Wait for all promises to resolve
        const results = await Promise.all(promises);

        return results;
    } catch (error) {
        console.error('Error fetching element definitions:', error);
        throw error;
    }
}
