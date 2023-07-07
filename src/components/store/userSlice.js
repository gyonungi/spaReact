import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUserStatus",
  async (params) => {
    const { currentPage } = params;
    const { data } = await axios.get(
      `https://64a56be700c3559aa9bfad48.mockapi.io/users?page=${currentPage}&limit=2`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
      state.users = [];
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [fetchUsers.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
