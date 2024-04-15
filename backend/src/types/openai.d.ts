declare module 'openai' {
    export interface OpenAIOptions {
      apiKey: string;
    }
  
    export class OpenAI {
      constructor(options: OpenAIOptions);
      completions: any; 
    }
  }
  