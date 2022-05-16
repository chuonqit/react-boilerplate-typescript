import { createSlice } from "@reduxjs/toolkit";

export type AppState = {
  theme: "light" | "dark";
};

const initialState: AppState = {
  theme: "light",
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setAppTheme } = appReducer.actions;
export default appReducer;
