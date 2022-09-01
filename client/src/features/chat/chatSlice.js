import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import chatService from "./chatService";

const initialState = {
  groups: [],
  group: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

// Create Group
export const createGroup = createAsyncThunk(
  "groups/create",
  async (groupData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await chatService.createGroup();
    } catch (error) {}
  }
);
