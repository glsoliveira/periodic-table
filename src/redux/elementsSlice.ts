import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ElementsState {
  list: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ElementsState = {
  list: [],
  isLoading: false,
  error: null,
};

export const loadElements = createAsyncThunk(
  'elements/load',
  async (_, { rejectWithValue }) => {
    try {
      const response = await import('../data/elements.json');
      return response.default.elements.sort((a, b) => b.length - a.length);
    } catch (error) {
      return rejectWithValue('Failed to load elements');
    }
  }
);

export const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    
    resetElements: (state) => {
      state.list = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadElements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadElements.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(loadElements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Could not load elements';
      });
  },
});

export const { resetElements } = elementsSlice.actions;

export default elementsSlice.reducer;
