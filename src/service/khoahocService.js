import { axiosCustom } from "./config";

export const khoahocService = {
  getListKhoaHoc: (maNhom = "GP01") => {
    return axiosCustom.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`
    );    
  },
  getListNhom: async () => {
    // Các nhóm có thể có trong backend
    const nhoms = ["GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10"];
    
    const results = await Promise.all(
      nhoms.map((nhom) => khoahocService.getListKhoaHoc(nhom))
    );

    // Gộp toàn bộ data
    const allCourses = results.flatMap((res) => res.data);

    // Lấy ra danh sách mã nhóm thực sự có dữ liệu
    const nhomList = [...new Set(allCourses.map((item) => item.maNhom.toUpperCase()))];

    return nhomList;
  },
  getKhoaHocDetail: (khoahocId) => {
    return axiosCustom.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${khoahocId}`);
  },


    getDanhMucKhoaHoc: () => {
        return axiosCustom.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
    },
    getKhoaHocTheoDanhMuc: (maDanhMuc) => {
        return axiosCustom.get( `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc&maDanhMuc=${maDanhMuc}`);
    },
    getListNguoiDung: () => {
        return axiosCustom.get("/QuanLyNguoiDung/LayDanhSachNguoiDung");
    },
    postLogin :()=>{
        return axiosCustom.post("/QuanLyNguoiDung/DangNhap");
    },
    postRegister : () => {
        return axiosCustom.post("/QuanLyNguoiDung/DangKy");
    },


};