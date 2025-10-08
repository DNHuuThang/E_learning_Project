import { axiosCustom } from "./config";

export const userService = {
  
    postLogin :(infoUser)=>{
        return axiosCustom.post("/QuanLyNguoiDung/DangNhap", infoUser);
    },
    postRegister : (infoUser) => {
        return axiosCustom.post("/QuanLyNguoiDung/DangKy", infoUser);
    },
    postInfoUser : (infoUser) => {
        return axiosCustom.post("/QuanLyNguoiDung/ThongTinTaiKhoan", infoUser);
    },
    putInfoUserUpdate : (infoUser) => {
        return axiosCustom.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", infoUser);
    },
    postDangKyKhoaHoc : (infoUser) => {
        return axiosCustom.post("/QuanLyKhoaHoc/DangKyKhoaHoc", infoUser);
    },
    postHuyDangKyKhoaHoc : (infoUser) => {
        return axiosCustom.post("/QuanLyKhoaHoc/HuyGhiDanh", infoUser);
    },
};