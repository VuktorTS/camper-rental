import { createSlice } from "@reduxjs/toolkit";
import { getAdverts } from "./advertsOperations";

const initialState = {
  isLoading: false,
  adventers: [],
  favorites: ["hello"],
};

const adventerSlice = createSlice({
  name: "camper",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.adventers = [...state.adventers, ...payload];
        state.favorites = ["world"];
      })
      .addCase(getAdverts.rejected, (state, { payload }) => {
        console.log("🚀 ~ builder.addCase ~ payload:", payload);
      });
  },
});

export const adventerReducer = adventerSlice.reducer;
