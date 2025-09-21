// stores/manhomSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listMaNhom: [], // để chứa danh sách mã nhóm
}

const manhomSlice = createSlice({
  name: 'manhomSlice',
  initialState,
  reducers: {
    setListMaNhom: (state, action) => {
      state.listMaNhom = action.payload    
    }
  }
})

export const { setListMaNhom } = manhomSlice.actions
export default manhomSlice.reducer
