import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextState {
  content: string; 
}

const initialState: TextState = {
  content: "", 
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {

    updateContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    
  },
  
});

export const { updateContent } = textSlice.actions;

export default textSlice.reducer;
