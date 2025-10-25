import React, { useEffect, useState } from "react";
import { khoahocService } from "../../service/khoahocService";
import { useDispatch, useSelector } from "react-redux";
import { setListKhoaHocPhanTrang } from "../../stores/khoahocphantrang";
import { Button, Pagination } from "antd";
import {
  FaBook,
  FaBriefcase,
  FaCamera,
  FaComputer,
  FaGlobe,
  FaLaptop,
  FaPlay,
} from "react-icons/fa6";
import { IoBookmarks } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const KhoaHocPhanTrangPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listKhoaHocPhanTrang = useSelector(
    (state) => state.khoahocphantrangSlice.listKhoaHocPhanTrang
  );

  // State cho phân trang
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [total, setTotal] = useState(0);

  const fetchKhoaHocPhanTrangPage = async (
    currentPage = page,
    currentSize = pageSize
  ) => {
    try {
      const response = await khoahocService.getListKhoaHoc_PhanTrang(
        currentPage,
        currentSize,
        "GP01" // MaNhom demo, bạn có thể lấy từ redux hoặc config
      );

      dispatch(setListKhoaHocPhanTrang(response.data.items));
      setTotal(response.data.totalCount); // tổng số bản ghi backend trả về
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchKhoaHocPhanTrangPage(page, pageSize);
  }, [page, pageSize]);

  const handleRedirectKhoaHocDetailPage = (khoahocId) => {
    console.log("khoahocId", khoahocId);
    //DI Chuyển qua trang chi tiết khóa học
    navigate(`/detail/${khoahocId}`);
  };

  const stats = [
    {
      title: "CHƯƠNG TRÌNH HỌC",
      value: 300,
      icon: <FaLaptop size={30} />,
      bg: "bg-slate-800",
    },
    {
      title: "NHÀ SÁNG TẠO",
      value: 10000,
      icon: <FaCamera size={30} />,
      bg: "bg-teal-600",
    },
    {
      title: "NHÀ THIẾT KẾ",
      value: 400,
      icon: <FaBriefcase size={30} />,
      bg: "bg-yellow-400",
    },
    {
      title: "BÀI GIẢNG",
      value: 3000,
      icon: <FaBook size={30} />,
      bg: "bg-orange-400",
    },
    {
      title: "VIDEO",
      value: 40000,
      icon: <FaPlay size={30} />,
      bg: "bg-orange-500",
    },
    {
      title: "LĨNH VỰC",
      value: 200,
      icon: <FaGlobe size={30} />,
      bg: "bg-red-500",
    },
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-yellow-300 text-center py-10 ">
        <h2 className="text-3xl font-bold text-white uppercase">KHÓA HỌC</h2>
        <p className="text-white mt-2">Bắt đầu hành trình nào!!!</p>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-10 mx-10  ">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} flex flex-col items-center justify-center text-white py-10`}
          >
            <h3 className="text-sm font-semibold uppercase mb-2">
              {item.title}
            </h3>
            <div className="mb-2">{item.icon}</div>
            <p className="text-lg font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex text-start mt-20 -mb-10 text-2xl font-bold">
        <IoBookmarks className="text-pink-300 mt-1" />
        <h1>Danh sách khóa học</h1>
      </div>

      {/* Danh sách khóa học */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-x-10 mt-20 ">
        {listKhoaHocPhanTrang?.map((khoaHocPhanTrang, index) => (
          <div
            key={index}
            className="relative group"
            onClick={() =>
              handleRedirectKhoaHocDetailPage(khoaHocPhanTrang.maKhoaHoc)
            }
          >
            {/* Nhãn yêu thích */}
            <span
              className="
               absolute md:top-3 md:-left-1 lg:top-5 lg:-left-1 z-10
                    bg-red-500 text-white text-xs px-2 py-1
                    before:content-[''] before:absolute before:left-0 before:-bottom-2
                    before:border-b-[10px] before:border-b-transparent
                    before:border-r-[5px] before:border-r-red-500
                    before:brightness-90
                  after:content-[''] after:absolute after:-top-0.5 after:-right-3
                  after:border-t-[12px] after:border-b-[12px] after:border-r-[12px]
                  after:border-t-red-500 after:border-b-red-500 after:border-r-transparent
            "
            >
              YÊU THÍCH
            </span>
            <div className="bg-white shadow overflow-visible hover:shadow-lg transition relative">
              {/* Ảnh khóa học */}
              <img
                src={khoaHocPhanTrang.hinhAnh}
                alt={khoaHocPhanTrang.tenKhoaHoc}
                className="w-full h-40 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://canhme.com/wp-content/uploads/2018/09/Nodejs.png";
                }}
              />

              {/* Nội dung */}
              <div className="p-3">
                <span
                  className=" absolute top-37 -left-1 sm:top-37 sm:-left-1 md:top-37 md:-left-1 lg:top-37 lg:-left-1 lg:w-40
                      bg-teal-500 text-white text-xs px-6 py-1 pr-8
                      before:content-[''] before:absolute before:left-0 before:-bottom-2
                      before:border-b-[10px] before:border-b-transparent
                      before:border-r-[5px] before:border-r-teal-500
                      after:content-[''] after:absolute after:-top-0.5 after:-right-3
                      after:border-t-[12px] after:border-b-[12px] after:border-r-[12px]
                      after:border-t-teal-500 after:border-b-teal-500 after:border-r-transparent"
                >
                  {khoaHocPhanTrang.danhMucKhoaHoc?.tenDanhMucKhoaHoc ||
                    "Khóa học"}
                </span>

                <h3 className="font-semibold mt-2 text-sm line-clamp-2">
                  {khoaHocPhanTrang.tenKhoaHoc}
                </h3>

                {/* Giảng viên */}
                <div className="mt-3 flex items-center gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                    alt="author"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-gray-700">
                    {khoaHocPhanTrang.nguoiTao?.hoTen || "Chưa rõ"}
                  </span>
                </div>

                {/* Giá (demo) */}
                <div className="mt-2">
                  <span className="line-through text-gray-400 mr-2">
                    800.000đ
                  </span>
                  <span className="text-red-500 font-bold">400.000đ</span>
                </div>
              </div>
              {/* Cửa sổ nhỏ khi hover */}
              <div
                className="
                  absolute 
                  sm:top-full sm:left-1/2 sm:-translate-x-1/2 sm:mt-2
                  md:-top-32 md:left-1/2 md:-translate-x-1/2 md:mt-0
                  w-64 bg-white shadow-lg rounded-lg p-4
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300 z-20
                "
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                  alt="author"
                  className="w-6 h-6 rounded-full"
                />
                <h5 className="font-bold text-sm mb-2">
                  {khoaHocPhanTrang.nguoiTao?.hoTen}
                </h5>
                <h4 className="font-bold text-sm mb-2">
                  {khoaHocPhanTrang.tenKhoaHoc}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-3">
                  {khoaHocPhanTrang.moTa ||
                    "Khóa học này sẽ giúp bạn nắm vững kiến thức từ cơ bản đến nâng cao..."}
                </p>
                <button className="mt-2 w-full py-1 bg-teal-500 text-white text-xs font-semibold rounded hover:bg-teal-600">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={total}
          showSizeChanger
          pageSizeOptions={["4", "8", "12", "16"]}
          onChange={(newPage, newPageSize) => {
            setPage(newPage);
            setPageSize(newPageSize);
          }}
        />
      </div>
    </div>
  );
};

export default KhoaHocPhanTrangPage;
