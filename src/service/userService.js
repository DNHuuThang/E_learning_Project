import { axiosCustom } from "./config";
const DEFAULT_GROUP = "GP01";
export const userService = {
  postLogin: (infoUser) => {
    return axiosCustom.post("/QuanLyNguoiDung/DangNhap", infoUser);
  },
  postRegister: (infoUser) => {
    return axiosCustom.post("/QuanLyNguoiDung/DangKy", infoUser);
  },
  layDanhSachLoaiNguoiDung() {
    return axiosCustom.get("/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
  thongTinNguoiDung(payload) {
    return axiosCustom.post("/QuanLyNguoiDung/ThongTinNguoiDung", payload);
  },

  layDanhSachNguoiDung(maNhom = DEFAULT_GROUP) {
    return axiosCustom.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: { MaNhom: maNhom },
    });
  },

  layDanhSachNguoiDung_PhanTrang({
    tuKhoa = "",
    page = 1,
    pageSize = 10,
    maNhom = DEFAULT_GROUP,
  }) {
    const params = {
      MaNhom: maNhom,
      page,
      pageSize,
    };
    if (typeof tuKhoa === "string" && tuKhoa.trim().length > 0) {
      params.tuKhoa = tuKhoa.trim();
    }
    return axiosCustom.get("/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang", {
      params,
    });
  },

  timKiemNguoiDung({ tuKhoa = "", maNhom = DEFAULT_GROUP }) {
    return axiosCustom.get("/QuanLyNguoiDung/TimKiemNguoiDung", {
      params: { MaNhom: maNhom, tuKhoa },
    });
  },

  thongTinTaiKhoan(payload) {
    // Một số backend yêu cầu { taiKhoan } để trả chi tiết
    return axiosCustom.post("/QuanLyNguoiDung/ThongTinTaiKhoan", payload);
  },

  themNguoiDung(data) {
    return axiosCustom.post("/QuanLyNguoiDung/ThemNguoiDung", data);
  },

  capNhatThongTinNguoiDung(data) {
    // Thường payload bao gồm đầy đủ các field; admin được phép cập nhật nhiều trường
    return axiosCustom.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },

  xoaNguoiDung(taiKhoan) {
    // Thường là ?TaiKhoan=abc
    return axiosCustom.delete("/QuanLyNguoiDung/XoaNguoiDung", {
      params: { TaiKhoan: taiKhoan },
    });
  },

  // Các API phục vụ "Ghi danh"
   layDanhSachKhoaHocChuaGhiDanh({ taiKhoan }) {
   const tk = typeof taiKhoan === "string" ? taiKhoan : (taiKhoan?.taiKhoan ?? "");
   // POST nhưng không có body; truyền query TaiKhoan đúng như Swagger
   return axiosCustom.post(
     "/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh",
     null,
     { params: { TaiKhoan: tk } }
   );
 },
  layDanhSachKhoaHocChoXetDuyet({ taiKhoan }) {
    return axiosCustom.post(
      "/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",
      { taiKhoan }
    );
  },
  layDanhSachKhoaHocDaXetDuyet({ taiKhoan }) {
    return axiosCustom.post(
      "/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
      { taiKhoan }
    );
  },
  layDanhSachNguoiDungChuaGhiDanh({ maKhoaHoc }) {
    return axiosCustom.post(
      "/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
      { maKhoaHoc }
    );
  },
  layDanhSachHocVienChoXetDuyet({ maKhoaHoc }) {
    return axiosCustom.post(
      "/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet",
      { maKhoaHoc }
    );
  },
  layDanhSachHocVienKhoaHoc({ maKhoaHoc }) {
    return axiosCustom.post("/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",{ maKhoaHoc });
  },
  ghiDanhKhoaHoc({ maKhoaHoc, taiKhoan }) {
    return axiosCustom.post("/QuanLyKhoaHoc/GhiDanhKhoaHoc", {
      maKhoaHoc,
      taiKhoan,
    });
  },
  huyGhiDanh({ maKhoaHoc, taiKhoan }) {
    return axiosCustom.post("/QuanLyKhoaHoc/HuyGhiDanh", {
      maKhoaHoc,
      taiKhoan,
    });
  },
};
