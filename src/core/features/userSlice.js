import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userActions from "./userActions";

const initialState = {};

export const token = createAsyncThunk("user/token", async (thunkAPI) => {
  try {
    return await userActions.token;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

export const { reset, resetValidation } = userSlice.actions;
export default userSlice.reducer;
