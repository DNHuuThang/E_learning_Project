import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listGiangVien: [],
}

const giangVienSlice = createSlice({
  name: 'giangVienSlice',
  initialState,
  reducers: {
    setListGiangVien: (state, action) => {
        state.listGiangVien = action.payload
    }   
  }
});

export const { setListGiangVien } = giangVienSlice.actions

export default giangVienSlice.reducer