import { useMemo, useState } from "react";

/** Phân trang mảng trên client */
export function paginate(arr = [], page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  return (arr || []).slice(start, start + pageSize);
}

/** Hook tìm kiếm + phân trang client */
export function useClientFilterPaginate(list = [], getSearchable, pageSize = 10) {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return list || [];
    return (list || []).filter((x) => String(getSearchable?.(x) ?? "").toLowerCase().includes(s));
  }, [list, q, getSearchable]);

  const pageItems = useMemo(() => paginate(filtered, page, pageSize), [filtered, page, pageSize]);

  return {
    q, setQ,
    page, setPage,
    pageItems,
    total: filtered.length,
  };
}
