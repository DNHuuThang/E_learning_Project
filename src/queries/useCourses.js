import { useQuery } from "@tanstack/react-query";
import { khoahocService } from "../service/khoahocService";
import { normalizeCourse } from "../components/util/course";

export function useCourses({ search, page, pageSize, maNhom }) {
  return useQuery({
    queryKey: ["courses", { search, page, pageSize, maNhom }],
    queryFn: async () => {
      const res = await khoahocService.layDanhSachKhoaHoc_PhanTrang({
        tenKhoaHoc: search,
        page,
        pageSize,
        maNhom,
      });
      const d = res.data ?? {};
      const items = Array.isArray(d.items) ? d.items.map(normalizeCourse) : [];
      return { items, totalCount: d.totalCount ?? 0 };
    },
    keepPreviousData: true,
  });
}
