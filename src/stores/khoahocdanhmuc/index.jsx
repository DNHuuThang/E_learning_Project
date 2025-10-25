import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listDanhMucKhoaHoc: [],
};

const danhmuckhoahocSlice = createSlice({
  name: "danhmuckhoahocSlice",
  initialState,
  reducers: {
    setListDanhMucKhoaHoc: (state, { payload }) => {
      state.listDanhMucKhoaHoc = payload;
    },
  },
});

export const { setListDanhMucKhoaHoc } = danhmuckhoahocSlice.actions;

export default danhmuckhoahocSlice.reducer;
