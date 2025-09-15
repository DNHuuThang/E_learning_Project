//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listKhoaHoc: [],
}

const khoahocSlice = createSlice({
  name: 'khoahocSlice',
  initialState,
  reducers: {
    setListKhoaHoc: (state, action) => {
        state.listKhoaHoc = action.payload
    }
  }
});

export const {setListKhoaHoc} = khoahocSlice.actions

export default khoahocSlice.reducer