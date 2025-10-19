// Chuẩn hóa dữ liệu khóa học trả về từ API khác nhau
export function normalizeCourse(it = {}) {
  return {
    ...it,
    hinhAnh: it.hinhAnh || it.hinhAnhKhoaHoc || it.image || "",
    nguoiTao: it.nguoiTao || it.creator || null,
    tenKhoaHoc:
      it.tenKhoaHoc ||
      it.tenKhoaHocVN ||
      it.tenKhoaHocEN ||
      it.tenKhoaHocAlias ||
      it.tenKhoaHoc,
  };
}

// Slug cho biDanh
export function toSlug(s = "") {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
