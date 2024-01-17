import { RootState } from '@/shared/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IExampleSliceState {
  token: boolean;
}

const initialState: IExampleSliceState = {
  token: false,
};

const ExampleSlice = createSlice({
  name: 'exampleName',
  initialState,
  reducers: {
    setHeight: (state, action: PayloadAction<boolean>) => {
      state.token = action.payload;
    },
  },
});

export const exampleNameActions = ExampleSlice.actions;

export const exampleNameSelectors = {
  token: (state: RootState) => state.exampleName.token,
};

export default ExampleSlice.reducer;
