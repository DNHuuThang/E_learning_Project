import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { Rate } from "antd";
import { khoahocService } from "../../service/khoahocService";
import { FaBookOpen } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import NoiDungKhoaHoc from "./components/NoiDungKH";
import KhoaHocThamKhao from "./components/KhoaHocThamKhao";
import FormDangKyPage from "./components/boxdangky";

const KhoaHocDetail = () => {
  const { khoahocId } = useParams();
  const [khoaHoc, setKhoaHoc] = useState(null);

  const fetchKhoaHocDetail = async () => {
    try {
      const responKhoaHocDetail = await khoahocService.getKhoaHocDetail(
        khoahocId
      );
      setKhoaHoc(responKhoaHocDetail.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchKhoaHocDetail();
  }, [khoahocId]);

  if (!khoaHoc) return <div>Đang tải...</div>;

  return (
    <div className="">
      <div className=" mx-auto  ">
        <div className="bg-amber-300 text-white p-6  ">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-bold mb-1 ">
            THÔNG TIN KHÓA HỌC
          </h1>
          <p className="text-sm font-semibold mb-8">
            TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột trái */}
          <div className="lg:col-span-2 bg-white p-6 rounded ">
            {/* Tên khóa học */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight mb-4 ">
              {khoaHoc.tenKhoaHoc}
            </h2>
            {/* Giảng viên + Lĩnh vực + Rating */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={khoaHoc.hinhAnh}
                  alt={khoaHoc.tenKhoaHoc}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">Giảng viên</p>
                  <p className="font-semibold">{khoaHoc.nguoiTao?.hoTen}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="bg-yellow-300 
                sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 
                flex items-center justify-center"
                >
                  <FaBookOpen className="text-white sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lĩnh vực</p>
                  <p className="font-semibold">
                    {khoaHoc.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Rate allowHalf disabled defaultValue={3.5} />
                <span className="font-semibold">3.5</span>
                <span className="text-gray-500 text-sm">(100 đánh giá)</span>
              </div>
            </div>
            {/* Mô tả */}
            <p className="text-gray-700 mb-6">{khoaHoc.moTa}</p>
            {/* Những gì bạn sẽ học */}
            <h3 className="font-medium leading-tight text-lg mb-3">
              Những gì bạn sẽ học
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-gray-700">
              <div className="flex items-center gap-3">
                <FcLike className="w-6 h-6 flex-shrink-0" />
                <p>
                  Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với
                  người dùng và phản ứng nhanh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FcLike className="w-6 h-6 flex-shrink-0" />
                <p>
                  Đăng ký công việc được trả lương cao hoặc làm freelancer trong
                  một trong những lĩnh vực hot nhất
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FcLike className="w-6 h-6 flex-shrink-0" />
                <p>
                  Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng
                  sức mạnh của JavaScript
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FcLike className="w-6 h-6 flex-shrink-0" />
                <p>Tìm hiểu tất cả về React Hooks và React Components</p>
              </div>
              <div className="flex items-center gap-3">
                <FcLike className="w-6 h-6 flex-shrink-0" />
                <p>
                  Thông thạo chuỗi công cụ hỗ trợ React (NPM, Webpack, Babel,
                  ES6/ES2015)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FcLike className="w-6 h-6 flex-shrink-0" />
                <p>
                  Nhận ra sức mạnh của việc xây dựng các thành phần có thể tái
                  sử dụng và kết hợp
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FcLike className="w-6 h-6 flex-shrink-0" />
                <p>
                  Giải thích cách hoạt động của Redux cho mọi người vì bạn nắm
                  vững nguyên lý cơ bản
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FcLike className="w-6 h-6 flex-shrink-0" />
                <p>
                  Nắm vững các khái niệm đằng sau việc cấu trúc ứng dụng Redux
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải */}
          <FormDangKyPage />
        </div>
      </div>

      <NoiDungKhoaHoc />
      <KhoaHocThamKhao />
    </div>
  );
};

export default KhoaHocDetail;
