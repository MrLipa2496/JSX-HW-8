import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Test",
  lastName: "Testovych",
  isFavourite: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavourite: state => {
      state.isFavourite = !state.isFavourite;
    },
  },
});

export const { toggleFavourite } = userSlice.actions;
export default userSlice.reducer;
