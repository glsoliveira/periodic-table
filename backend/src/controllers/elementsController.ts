import { Request, Response } from 'express';
import { getElementDefinitions as getServiceDefinitions } from '../services/elementsService';

export async function getElementDefinitions(req: Request, res: Response): Promise<void> {
    try {
        const symbols = req.query.symbols;
        if (!symbols || typeof symbols !== 'string') {
            res.status(400).json({ error: "Please provide one or more element symbols separated by commas." });
            return;
        }

        const symbolList: string[] = symbols.split(',').map(symbol => symbol.trim());

        if (symbolList.length === 0) {
            res.status(400).json({ error: "Please provide one or more element symbols separated by commas." });
            return;
        }

        // Fetch the definition for each symbol in parallel
        const promises = symbolList.map(async symbol => {
            const definition = await getServiceDefinitions([symbol]); // Pass symbol as an array
            return { symbol, definition };
        });

        // Wait for all promises to resolve
        const results = await Promise.all(promises);

        res.json({ success: true, results });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
