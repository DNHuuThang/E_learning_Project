import { createSlice } from '@reduxjs/toolkit'
import { keyLocalStorage, localStorageUtil } from '../../components/util/localStorage';

const initialState = {
    infoUser: localStorageUtil.get(keyLocalStorage.INFO_USER),
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setInfoUser: (state, { payload }) => {
        state.infoUser = payload
    },
    setLogout: (state) => {
        state.infoUser = null;
        localStorageUtil.remove(keyLocalStorage.INFO_USER);
    }
  }
});

export const {setInfoUser, setLogout} = userSlice.actions

export default userSlice.reducer