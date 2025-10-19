// src/service/khoahocService.js
import { axiosCustom } from "./config";

export const khoahocService = {
  // LIST cơ bản
  layDanhSachKhoaHoc: ({ maNhom = "GP01", tuKhoa = "" } = {}) => {
    const params = { MaNhom: maNhom };
    // Swagger không yêu cầu tuKhoa, nhưng nếu BE có hỗ trợ thì thêm có điều kiện
    if (typeof tuKhoa === "string" && tuKhoa.trim()) params.tuKhoa = tuKhoa.trim();
    return axiosCustom.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", { params });
  },

  // Danh mục
  layDanhMucKhoaHoc: () =>
    axiosCustom.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc"),

  // Theo danh mục
  layKhoaHocTheoDanhMuc: ({ maDanhMuc, maNhom = "GP01" }) =>
    axiosCustom.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      params: { maDanhMuc, MaNhom: maNhom },
    }),

  // Phân trang (Swagger có /LayDanhSachKhoaHoc_PhanTrang)
  layDanhSachKhoaHoc_PhanTrang({ tenKhoaHoc, page = 1, pageSize = 10, maNhom }) {
    const params = { page, pageSize, MaNhom: maNhom };
    if (tenKhoaHoc && tenKhoaHoc.trim()) params.tenKhoaHoc = tenKhoaHoc.trim();
    return axiosCustom.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang", { params });
  },

  // Chi tiết
  layThongTinKhoaHoc: (maKhoaHoc) =>
    axiosCustom.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc", { params: { maKhoaHoc } }),

  // Học viên khóa học (nếu cần)
  layThongTinHocVienKhoaHoc: (maKhoaHoc) =>
    axiosCustom.get("/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc", { params: { maKhoaHoc } }),

  // CRUD JSON (không upload file)
  themKhoaHoc: (payload) =>
    axiosCustom.post("/QuanLyKhoaHoc/ThemKhoaHoc", payload),

  capNhatKhoaHoc: (payload) =>
    axiosCustom.put("/QuanLyKhoaHoc/CapNhatKhoaHoc", payload),

  xoaKhoaHoc: (maKhoaHoc) =>
    axiosCustom.delete("/QuanLyKhoaHoc/XoaKhoaHoc", { params: { MaKhoaHoc: maKhoaHoc } }),

  // Ghi danh / Đăng ký / Hủy ghi danh (nếu dùng ở trang này)
  ghiDanhKhoaHoc: ({ maKhoaHoc, taiKhoan }) =>
    axiosCustom.post("/QuanLyKhoaHoc/GhiDanhKhoaHoc", { maKhoaHoc, taiKhoan }),

  dangKyKhoaHoc: ({ maKhoaHoc, taiKhoan }) =>
    axiosCustom.post("/QuanLyKhoaHoc/DangKyKhoaHoc", { maKhoaHoc, taiKhoan }),

  huyGhiDanh: ({ maKhoaHoc, taiKhoan }) =>
    axiosCustom.post("/QuanLyKhoaHoc/HuyGhiDanh", { maKhoaHoc, taiKhoan }),

  // Upload ảnh riêng (nếu bạn bật chức năng upload)
  uploadHinhAnhKhoaHoc: ({ maKhoaHoc, file }) => {
    const formData = new FormData();
    formData.append("maKhoaHoc", maKhoaHoc);
    formData.append("hinhAnh", file); // đúng tên field thường là "File"
    return axiosCustom.post("/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  // Endpoint multipart theo Swagger (tuỳ bạn có dùng hay không)
  capNhatKhoaHocUpload: (formData /* FormData */) =>
    axiosCustom.post("/QuanLyKhoaHoc/CapNhatKhoaHocUpload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  themKhoaHocUploadHinh: ({ payload, file }) => {
    const fd = new FormData();
    // frm phải là STRING chứa JSON
    fd.append("frm", JSON.stringify(payload));
    if (file) fd.append("File", file); // đổi "File" nếu Swagger ghi tên khác
    return axiosCustom.post("/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
