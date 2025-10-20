import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '../service/userService';
import { message } from 'antd';

export const useUsersPage = ({ search = '', page = 1, pageSize = 10, maNhom = 'GP01' }) => {
  return useQuery({
    queryKey: ['users', { search, page, pageSize, maNhom }],
    queryFn: async () => {
      const res = await userService.layDanhSachNguoiDung_PhanTrang({
        tuKhoa: search, page, pageSize, maNhom,
      });
      return res.data ?? { items: [], totalCount: 0 };
    },
    keepPreviousData: true,
  });
};

export const useUserMutations = () => {
  const qc = useQueryClient();

  const addUser = useMutation({
    mutationFn: userService.themNguoiDung,
    onSuccess: () => { message.success('Thêm người dùng thành công'); qc.invalidateQueries({ queryKey: ['users'] }); },
  });

  const updateUser = useMutation({
    mutationFn: userService.capNhatThongTinNguoiDung,
    onSuccess: () => { message.success('Cập nhật người dùng thành công'); qc.invalidateQueries({ queryKey: ['users'] }); },
  });

  const deleteUser = useMutation({
    mutationFn: userService.xoaNguoiDung,
    onSuccess: () => { message.success('Đã xóa người dùng'); qc.invalidateQueries({ queryKey: ['users'] }); },
  });

  return { addUser, updateUser, deleteUser };
};
