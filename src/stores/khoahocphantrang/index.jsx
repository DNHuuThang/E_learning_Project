import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listKhoaHocPhanTrang: [],
};

const khoahocphantrangSlice = createSlice({
  name: "khoahocphantrangSlice",
  initialState,
  reducers: {
    setListKhoaHocPhanTrang: (state, { payload }) => {
      state.listKhoaHocPhanTrang = payload;
    },
  },
});

export const { setListKhoaHocPhanTrang } = khoahocphantrangSlice.actions;

export default khoahocphantrangSlice.reducer;
