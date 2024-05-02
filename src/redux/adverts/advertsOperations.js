import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCampars } from "../../services/api";

export const getAdverts = createAsyncThunk(
  "camper/getAdverts",
  async (page, thunkAPI) => {
    try {
      const adverts = await getAllCampars(page);
      return adverts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
