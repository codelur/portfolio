import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // Default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

//export the actions
export const { toggleTheme } = themeSlice.actions;
//export the reducer
export default themeSlice.reducer;