import { axiosCustom } from "./config";

export const khoahocService = {
  layDanhSachKhoaHoc: ({ maNhom = "GP01", tuKhoa = "" } = {}) => {
    const params = { MaNhom: maNhom };
    if (typeof tuKhoa === "string" && tuKhoa.trim()) params.tuKhoa = tuKhoa.trim();
    return axiosCustom.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", { params });
  },
    getListKhoaHoc: (maNhom = "GP01") => {
      return axiosCustom.get(
        `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`
      );    
    },
  getKhoaHocDetail: (khoahocId) => {
    return axiosCustom.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${khoahocId}`);
  },
  // Danh mục
  layDanhMucKhoaHoc: () => axiosCustom.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc"),

  getDanhMucKhoaHoc: () => {
    return axiosCustom.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },

  getListKhoaHoc_PhanTrang: (page, pageSize, maNhom) => {
    return axiosCustom.get(
      `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=${maNhom}`
    );
  },

  getKhoaHocTheoDanhMuc: (danhmucId) => {
    return axiosCustom.get(`/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${danhmucId}`);
  },

  getListNguoiDung: () => {
    return axiosCustom.get("/QuanLyNguoiDung/LayDanhSachNguoiDung");
  },

  postLogin: () => {
    return axiosCustom.post("/QuanLyNguoiDung/DangNhap");
  },

  postRegister: () => {
    return axiosCustom.post("/QuanLyNguoiDung/DangKy");
  },

  // Theo danh mục
  layKhoaHocTheoDanhMuc: ({ maDanhMuc, maNhom = "GP01" }) =>
    axiosCustom.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      params: { maDanhMuc, MaNhom: maNhom },
    }),

  // Phân trang
  layDanhSachKhoaHoc_PhanTrang({ tenKhoaHoc, page = 1, pageSize = 10, maNhom }) {
    const params = { page, pageSize, MaNhom: maNhom };
    if (tenKhoaHoc && tenKhoaHoc.trim()) params.tenKhoaHoc = tenKhoaHoc.trim();
    return axiosCustom.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang", { params });
  },

  // Chi tiết
  layThongTinKhoaHoc: (maKhoaHoc) =>
    axiosCustom.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc", { params: { maKhoaHoc } }),

  // Học viên khóa học
  layThongTinHocVienKhoaHoc: (maKhoaHoc) =>
    axiosCustom.get("/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc", { params: { maKhoaHoc } }),

  themKhoaHoc: (payload) => axiosCustom.post("/QuanLyKhoaHoc/ThemKhoaHoc", payload),

  capNhatKhoaHoc: (payload) => axiosCustom.put("/QuanLyKhoaHoc/CapNhatKhoaHoc", payload),

  xoaKhoaHoc: (maKhoaHoc) =>
    axiosCustom.delete("/QuanLyKhoaHoc/XoaKhoaHoc", { params: { MaKhoaHoc: maKhoaHoc } }),

  // Ghi danh / Đăng ký / Hủy ghi danh
  ghiDanhKhoaHoc: ({ maKhoaHoc, taiKhoan }) =>
    axiosCustom.post("/QuanLyKhoaHoc/GhiDanhKhoaHoc", { maKhoaHoc, taiKhoan }),

  dangKyKhoaHoc: ({ maKhoaHoc, taiKhoan }) =>
    axiosCustom.post("/QuanLyKhoaHoc/DangKyKhoaHoc", { maKhoaHoc, taiKhoan }),

  huyGhiDanh: ({ maKhoaHoc, taiKhoan }) =>
    axiosCustom.post("/QuanLyKhoaHoc/HuyGhiDanh", { maKhoaHoc, taiKhoan }),

  uploadHinhAnhKhoaHoc: ({ maKhoaHoc, file }) => {
    const formData = new FormData();
    formData.append("maKhoaHoc", maKhoaHoc);
    formData.append("File", file);
    return axiosCustom.post("/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  capNhatKhoaHocUpload: (formData) =>
    axiosCustom.post("/QuanLyKhoaHoc/CapNhatKhoaHocUpload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  themKhoaHocUploadHinh: ({ payload, file }) => {
    const fd = new FormData();
    fd.append("frm", JSON.stringify(payload));
    if (file) fd.append("File", file);
    return axiosCustom.post("/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
