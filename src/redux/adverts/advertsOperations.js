import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCampars } from "../../services/api";

export const getAdverts = createAsyncThunk(
  "camper/getAdverts",
  async (page, thunkAPI) => {
    try {
      const adverts = await getCampars(page);
      return adverts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
// export const getAllAdverts = createAsyncThunk(
//   "camper/getAllAdverts",
//   async (_, thunkAPI) => {
//     try {
//       const adverts = await getAllCampars();
//       return adverts;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
