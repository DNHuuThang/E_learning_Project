import React, { useEffect, useState } from "react";

import { toast } from "sonner";
import { localStorageUtil } from "../../../../components/util/localStorage";
import { userService } from "../../../../service/userService";
import { Button } from "antd";

const InfoKhoaHocUser = () => {
  const [infoUser, setInfoUser] = useState(null);

  const fetchInfoKhoaHocUser = async () => {
    try {
      const response = await userService.postInfoUser();
      setInfoUser(response.data);
    } catch (error) {
      console.log("Lỗi lấy thông tin khóa học người dùng:", error);
    }
  };

  useEffect(() => {
    fetchInfoKhoaHocUser();
  }, []);

  const handleHuyKhoaHoc = async (maKhoaHoc) => {
    try {
      const userLogin = localStorageUtil.get("INFO_USER");

      const dataHuy = {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: userLogin.taiKhoan,
      };

      await userService.postHuyDangKyKhoaHoc(dataHuy);
      toast.success("Huỷ khóa học thành công!");
      fetchInfoKhoaHocUser();
    } catch (error) {
      console.error("Lỗi huỷ khoá học:", error);
      toast.error("Huỷ khóa học thất bại!");
    }
  };

  if (!infoUser)
    return (
      <div className="text-center text-gray-500 py-10">Đang tải dữ liệu...</div>
    );

  const { chiTietKhoaHocGhiDanh = [] } = infoUser;
  console.log("chiTietKhoaHocGhiDanh", chiTietKhoaHocGhiDanh);

  return (
    <div className="p-5 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center sm:text-left">
        Danh sách khóa học đã ghi danh
      </h2>

      {chiTietKhoaHocGhiDanh.length > 0 ? (
        <ul className="space-y-4">
          {chiTietKhoaHocGhiDanh.map((khoaHoc) => (
            <li
              key={khoaHoc.maKhoaHoc}
              className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <img
                src={khoaHoc.hinhAnh}
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://canhme.com/wp-content/uploads/2018/09/Nodejs.png";
                }}
              />
              <div className="flex-1 text-center sm:text-left px-10">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {khoaHoc.tenKhoaHoc}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {khoaHoc.moTa}
                </p>
                <div className="text-xs text-gray-500 flex flex-wrap justify-center sm:justify-start gap-3">
                  <span>Mã khóa học: {khoaHoc.maKhoaHoc}</span>
                  <span>Lượt xem: {khoaHoc.luotXem}</span>
                  <span>Đánh giá: ⭐ {khoaHoc.danhGia}</span>
                </div>
              </div>
              <Button
                danger
                type="primary"
                onClick={() => handleHuyKhoaHoc(khoaHoc.maKhoaHoc)}
                className="!rounded-lg !px-5 !py-2 !text-sm !font-semibold hover:!opacity-90"
              >
                Huỷ Khoá Học
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 py-10">
          Bạn chưa ghi danh khóa học nào.
        </p>
      )}
    </div>
  );
};

export default InfoKhoaHocUser;
