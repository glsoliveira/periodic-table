import axios from 'axios';

// Defining the interface for the elements returned by the API
export interface Element {
  id: number;
  symbol: string;
  definition: string[];
  atomic: any;
  // Add more properties as necessary
}

// Interface for the data structure of the getElements response
export interface ElementsResponse {
  elements: Element[];
}

const API_BASE_URL = "https://periodic-table-backend.onrender.com/";


// Creating an object to simulate an API service with basic HTTP methods
const apiService = {
  get: async <T>(path: string): Promise<T> => {
    try {
      const response = await axios.get<T>(`${API_BASE_URL}${path}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.statusText || 'Network response was not ok');
    }
  }
};

// Function to get all elements from the API
export const getAllElements = async (): Promise<Element[]> => {
  try {
    const data: ElementsResponse = await apiService.get<ElementsResponse>('api/elements');
    return data.elements;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to fetch all elements');
  }
};

// Function added to get specific elements from the API based on symbols
export const getElements = async (symbols: string[]): Promise<Element[]> => {
  try {
    const query = symbols.join(',');
    const response: any = await apiService.get<any>(`elements?symbols=${query}`);
    return response.results;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to fetch elements');
  }
};

export default apiService;
