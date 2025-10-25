import { configureStore } from "@reduxjs/toolkit";
import khoahocSlice from "./khoahoc";
import danhmucSlice from "./danhmuc";
import giangVienSlice from "./giangvien";
import userSlice from "./user";
import manhomSlice from "./manhom";
import danhmuckhoahocSlice from "./khoahocdanhmuc";
import khoahocphantrangSlice from "./khoahocphantrang";
export const store = configureStore({
    reducer: {
        // noi dung reducer cua ung dung
         khoahocSlice: khoahocSlice,
         danhmucSlice: danhmucSlice,
         giangVienSlice: giangVienSlice,
         userSlice: userSlice,
         manhomSlice: manhomSlice,
         danhmuckhoahocSlice:danhmuckhoahocSlice,
         khoahocphantrangSlice:khoahocphantrangSlice,
    },
})