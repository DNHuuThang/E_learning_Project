import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { ClockCircleOutlined } from "@ant-design/icons";
import { RiCloseLargeFill } from "react-icons/ri";

const NoiDungKhoaHoc = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const sections = [
    {
      title: "MỤC 1: GIỚI THIỆU",
      lessons: [
        "Các khái niệm về React Component",
        "Thiết lập môi trường cho Windows",
        "Tạo ứng dụng React - React-Scripts",
        "Ghi chú nhanh về dấu ngoặc kép cho string interpolation",
      ],
    },
    {
      title: "MỤC 2: KIẾN THỨC CĂN BẢN",
      lessons: [
        "Trang chủ và thành phần thư mục",
        "Hướng dẫn khóa học + Liên kết Github",
        "Trang chủ thương mại điện tử + thiết lập SASS",
        "Tệp CSS và SCSS",
        "React 17: Cập nhật các gói + Phiên bản React mới nhất",
      ],
    },
    {
      title: "MỤC 3: KIẾN THỨC CHUYÊN SÂU",
      lessons: [
        "connect() and mapStateToProps",
        "Trạng thái thư mục vào Redux",
        "Thành phần Tổng quan về Bộ sưu tập",
      ],
    },
  ];

  // Hàm mở video
  const handleOpenVideo = (url) => {
    setVideoUrl(url);
    setOpenVideo(true);
  };

  return (
    <div className="container bg-white md:p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Nội dung khóa học</h2>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          {/* Tiêu đề mục */}
          <div className="flex items-center justify-between bg-gray-50 px-4 py-2">
            <h3 className="font-semibold text-lg">{section.title}</h3>
            <button className="px-3 py-1 border border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-white transition rounded">
              XEM TRƯỚC
            </button>
          </div>

          {/* Danh sách bài học */}
          <div className="mt-2 space-y-2">
            {section.lessons.map((lesson, i) => (
              <div
                key={i}
                onClick={() =>
                  handleOpenVideo("https://www.youtube.com/embed/fyQU3E9tj4k")
                }
                className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded transition cursor-pointer"
              >
                {/* Icon + Tên bài học */}
                <div className="flex items-center gap-2">
                  <FaPlay className="text-blue-500 text-sm" />
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
                    {lesson}
                  </span>
                </div>

                {/* Thời gian */}
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <ClockCircleOutlined className="text-blue-500" />
                  <span>14:35</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal Video */}
      {openVideo && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[50%] overflow-hidden relative">
            {/* Nút đóng */}
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-2 right-2 text-white hover:text-black text-xl"
            >
              <RiCloseLargeFill />
            </button>

            {/* Video */}
            <div className="aspect-video">
              <iframe className="w-full h-full" src={videoUrl}></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoiDungKhoaHoc;
