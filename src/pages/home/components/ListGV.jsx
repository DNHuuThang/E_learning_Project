import React, { useEffect } from "react";
import { khoahocService } from "../../../service/khoahocService";
import { useDispatch, useSelector } from "react-redux";
import { setListGiangVien } from "../../../stores/giangvien";
import { Rate, Card, Carousel } from "antd";

const ListGV = () => {
  const dispatch = useDispatch();
  const listGiangVien = useSelector(
    (state) => state.giangVienSlice.listGiangVien
  );

  const fetchListGiangVien = async () => {
    try {
      const response = await khoahocService.getListNguoiDung();
      const giangVienOnly = (response.data || []).filter(
        (user) => user.maLoaiNguoiDung === "GV"
      );
      dispatch(setListGiangVien(giangVienOnly));
    } catch (error) {
      console.log("errorListNguoiDung", error);
    }
  };

  useEffect(() => {
    fetchListGiangVien();
  }, []);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunks = chunkArray(listGiangVien, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20  relative">
      <h2 className="text-xl md:text-2xl font-bold mb-8 ">
        Giảng viên hàng đầu
      </h2>

      <Carousel
        dots
        className=" [&_.slick-dots]:!bottom-[-30px] [&_.slick-dots_li_button]:!bg-black [&_.slick-dots_li.slick-active_button]:!bg-amber-500"
      >
        {chunks.map((group, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {group.map((gv) => (
                <Card
                  key={gv.taiKhoan}
                  hoverable
                  className="rounded-2xl shadow-md text-center"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${gv.taiKhoan}`}
                    alt={gv.hoTen}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold">{gv.hoTen}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Chuyên gia lĩnh vực
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Rate
                      disabled
                      defaultValue={5}
                      className="text-yellow-500"
                    />
                    <span className="text-yellow-600 font-medium">4.9</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">100 Đánh giá</p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ListGV;
