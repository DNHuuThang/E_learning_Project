import { axiosCustom } from "./config";

export const khoahocService = {
    getListKhoaHoc: () => {
        return axiosCustom.get(
            "/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
        );    
    },
    getDanhMucKhoaHoc: () => {
        return axiosCustom.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
    },
    getKhoaHocTheoDanhMuc: (maDanhMuc) => {
        return axiosCustom.get( `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=GP01&maDanhMuc=${maDanhMuc}`);
    },
    getListNguoiDung: () => {
        return axiosCustom.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
    },
    postLogin :()=>{
        return axiosCustom.post("/QuanLyNguoiDung/DangNhap");
    },
    postRegister : () => {
        return axiosCustom.post("/QuanLyNguoiDung/DangKy");
    }
};