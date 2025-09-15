import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listDanhMuc: [],
}

const danhmucSlice = createSlice({
  name: 'danhMucSlice',
  initialState,
  reducers: {
    setListDanhMuc: (state, action) => {
        state.listDanhMuc = action.payload
    }
  }
});

export const { setListDanhMuc } = danhmucSlice.actions

export default danhmucSlice.reducer