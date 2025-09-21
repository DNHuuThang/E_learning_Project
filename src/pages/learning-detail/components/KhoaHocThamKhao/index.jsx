import { useEffect, useState } from "react";
import { khoahocService } from "../../../../service/khoahocService";
import { Pagination } from "antd";
import { CiCalendarDate, CiClock1, CiFilter } from "react-icons/ci";

const KhoaHocThamKhao = () => {
  const [danhSachKhoaHoc, setDanhSachKhoaHoc] = useState([]);
  const [trangHienTai, setTrangHienTai] = useState(1);
  const soLuongMoiTrang = 4;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await khoahocService.getListKhoaHoc();
        setDanhSachKhoaHoc(res.data);
      } catch (err) {
        console.error("Lỗi load khóa học:", err);
      }
    };
    fetchCourses();
  }, []);

  // Lấy danh sách khóa học hiển thị theo trang
  const indexBatDau = (trangHienTai - 1) * soLuongMoiTrang;
  const danhSachHienThi = danhSachKhoaHoc.slice(
    indexBatDau,
    indexBatDau + soLuongMoiTrang
  );

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Khóa học tham khảo</h2>

      {/* Grid hiển thị */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-20">
        {danhSachHienThi.map((khoaHoc) => (
          <div key={khoaHoc.maKhoaHoc} className="relative group">
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
                src={khoaHoc.hinhAnh}
                alt={khoaHoc.tenKhoaHoc}
                className="md:group-hover:scale-105 w-full h-40 object-cover "
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
                  {khoaHoc.danhMucKhoaHoc?.tenDanhMucKhoaHoc || "Khóa học"}
                </span>

                <h3 className="font-semibold mt-2 text-sm line-clamp-2">
                  {khoaHoc.tenKhoaHoc}
                </h3>

                {/* Giả lập dữ liệu */}
                <div className="mt-3 flex justify-between items-center text-sm text-gray-500">
                  <CiClock1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-500" />
                  <span>8 giờ</span>

                  <CiCalendarDate className="text-base sm:text-lg md:text-xl lg:text-2xl text-red-600" />
                  <span>4 tuần</span>

                  <CiFilter className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-500" />
                  <span>Tất cả</span>
                </div>

                {/* Giảng viên */}
                <div className="mt-3 flex items-center gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                    alt="author"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-gray-700">
                    {khoaHoc.nguoiTao?.hoTen || "Chưa rõ"}
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
                  {khoaHoc.nguoiTao?.hoTen}
                </h5>
                <h4 className="font-bold text-sm mb-2">{khoaHoc.tenKhoaHoc}</h4>
                <p className="text-xs text-gray-600 line-clamp-3">
                  {khoaHoc.moTa ||
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

      {/* Pagination của AntD */}
      <div className="flex justify-center mt-6">
        <Pagination
          current={trangHienTai}
          pageSize={soLuongMoiTrang}
          total={danhSachKhoaHoc.length}
          onChange={(page) => setTrangHienTai(page)}
        />
      </div>
    </div>
  );
};

export default KhoaHocThamKhao;
