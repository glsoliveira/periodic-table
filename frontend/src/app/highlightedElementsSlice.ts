import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HighlightedElementsState {
  elements: string[];
}

const initialState: HighlightedElementsState = {
  elements: [],
};

const highlightedElementsSlice = createSlice({
  name: 'highlightedElements',
  initialState,
  reducers: {
    setElements: (state, action: PayloadAction<string[]>) => {
      state.elements = action.payload;
    },
    resetElements: (state) => {
      state.elements = [];
    }
  }
});

export const { setElements, resetElements } = highlightedElementsSlice.actions;
export default highlightedElementsSlice.reducer;
