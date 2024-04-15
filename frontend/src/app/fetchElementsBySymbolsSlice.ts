import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getElements, Element } from './services/apiService';

interface FetchElementsBySymbolsState {
  list: Element[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FetchElementsBySymbolsState = {
  list: [],
  isLoading: false,
  error: null,
};

export const fetchElementsBySymbols = createAsyncThunk(
  'fetchElementsBySymbols/fetch',
  async (symbols: string[], { rejectWithValue }) => {
    try {
      return await getElements(symbols);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchElementsBySymbolsSlice = createSlice({
  name: 'fetchElementsBySymbols',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchElementsBySymbols.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchElementsBySymbols.fulfilled, (state, action: PayloadAction<Element[]>) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchElementsBySymbols.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export default fetchElementsBySymbolsSlice.reducer;
