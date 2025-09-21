import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rate, Button, Input } from "antd";
import {
  UserOutlined,
  FieldTimeOutlined,
  ReadOutlined,
  VideoCameraOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { khoahocService } from "../../service/khoahocService";
import { FaBookOpen } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import NoiDungKhoaHoc from "./components/NoiDungKH";
import KhoaHocThamKhao from "./components/KhoaHocThamKhao";

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
          <div className="bg-white p-6   space-y-4 flex flex-col justify-center mb-[15px] px-[30px] py-[10px] shadow-[1px_1px_10px_4px_#dadada]">
            <div className="text-2xl font-bold text-yellow-500 flex justify-end">
              ⚡ 500.000đ
            </div>
            <Button
              type=""
              block
              className="!border !border-yellow-500 !text-yellow-500 !text-sm !font-bold uppercase transition-all duration-500 hover:!bg-yellow-500 hover:!text-white hover:scale-[0.99]"
            >
              ĐĂNG KÝ
            </Button>

            <div className="space-y-10 divide-y divide-gray-200 text-gray-700">
              <p className="flex items-center pb-2">
                <UserOutlined className="mr-2 text-yellow-500 text-lg" />
                Ghi danh:{" "}
                <span className="ml-1 font-bold text-gray-800">
                  {khoaHoc.soLuongHocVien} học viên
                </span>
              </p>

              <p className="flex items-center pt-2 pb-2">
                <FieldTimeOutlined className="mr-2 text-yellow-500 text-lg" />
                Thời gian:{" "}
                <span className="ml-1 font-medium text-gray-800">18 giờ</span>
              </p>

              <p className="flex items-center pt-2 pb-2">
                <ReadOutlined className="mr-2 text-yellow-500 text-lg" />
                Bài học:{" "}
                <span className="ml-1 font-medium text-gray-800">10</span>
              </p>

              <p className="flex items-center pt-2 pb-2">
                <VideoCameraOutlined className="mr-2 text-yellow-500 text-lg" />
                Video:{" "}
                <span className="ml-1 font-medium text-gray-800">14</span>
              </p>

              <p className="flex items-center pt-2">
                <DatabaseOutlined className="mr-2 text-yellow-500 text-lg" />
                Trình độ:{" "}
                <span className="ml-1 font-medium text-gray-800">
                  Người mới bắt đầu
                </span>
              </p>
              <Input
                className="!mt-4 hover:!border-yellow-500 hover:!text-yellow-500 hover:scale-[0.99] transition-all duration-500"
                placeholder="Nhập mã"
              />
            </div>
          </div>
        </div>
      </div>

      <NoiDungKhoaHoc />
      <KhoaHocThamKhao />
    </div>
  );
};

export default KhoaHocDetail;
