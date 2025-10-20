import { useQuery } from "@tanstack/react-query";
import { userService } from "../service/userService";

export function useUserTypes() {
  return useQuery({
    queryKey: ["userTypes"],
    queryFn: async () => {
      const res = await userService.layDanhSachLoaiNguoiDung();
      const list = Array.isArray(res.data) ? res.data : res.data?.content || [];
      return list;
    },
    staleTime: 5 * 60 * 1000,
  });
}
