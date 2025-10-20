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

export function toSlug(s = "") {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
