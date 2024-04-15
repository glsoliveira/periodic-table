import { fetchElementDefinitions } from '../repositories/elementsDefinitionRepository';

export async function getElementDefinitions(symbols: string[]): Promise<string[]> {
    try {           
        const promises = symbols.map(async symbol => {
            const definition = await fetchElementDefinitions([symbol]); 
            return definition[0];
        });

        const results = await Promise.all(promises);

        return results;
    } catch (error) {
        console.error('Error fetching element definitions:', error);
        throw error;
    }
}
