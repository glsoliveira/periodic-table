import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllElements, Element } from './services/apiService';

interface LoadElementsState {
  list: Element[];
  isLoading: boolean;
  error: string | null;
}

const initialState: LoadElementsState = {
  list: [],
  isLoading: false,
  error: null,
};

export const loadElements = createAsyncThunk(
  'loadElements/load',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllElements();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const loadElementsSlice = createSlice({
  name: 'loadElements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadElements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadElements.fulfilled, (state, action: PayloadAction<Element[]>) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(loadElements.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export default loadElementsSlice.reducer;
