import { createSlice } from "@reduxjs/toolkit";

export type AppState = {
  number: number;
};

const initialState: AppState = {
  number: 0,
};

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    onIncrease: (state) => {
      state.number++;
    },
    onDecrease: (state) => {
      state.number--;
    },
  },
});

export const { onIncrease, onDecrease } = counterReducer.actions;
export default counterReducer;
