import { configureStore } from "@reduxjs/toolkit";
import khoahocSlice from "./khoahoc";
import danhmucSlice from "./danhmuc";
import giangVienSlice from "./giangvien";
export const store = configureStore({
    reducer: {
        // noi dung reducer cua ung dung
         khoahocSlice: khoahocSlice,
         danhmucSlice: danhmucSlice,
         giangVienSlice: giangVienSlice,
    },
})