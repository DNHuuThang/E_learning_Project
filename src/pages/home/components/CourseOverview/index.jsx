import React from "react";
import { AiOutlineCheck } from "react-icons/ai"; // tick icon

const CourseOverview = () => {
  const renderList = (items) =>
    items.map((item, idx) => (
      <li key={idx} className="flex items-center space-x-2">
        <AiOutlineCheck className="text-white w-5 h-5 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ));

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* Khóa học */}
      <div className="bg-teal-500 text-white p-6 relative row-span-2">
        <h2 className="text-2xl font-bold mb-4">KHÓA HỌC</h2>
        <p className="font-semibold mb-4">
          Học qua dự án thực tế, học đi đôi với hành...
        </p>
        <ul className="space-y-2">
          {renderList([
            "Hơn 1000 bài tập và dự án thực tế",
            "Công nghệ cập nhật mới nhất",
            "Hình ảnh, ví dụ, bài giảng sinh động trực quan",
            "Tư duy phân tích, giải quyết vấn đề trong dự án",
            "Học tập kinh nghiệm, qui trình làm việc chuẩn",
            "Cơ hội thực tập tại các công ty lớn như Microsoft",
          ])}
        </ul>
        <img
          src="https://demo2.cybersoft.edu.vn/static/media/astronaut.2eec3a58.png"
          alt="astronaut"
          className="absolute bottom-0 right-4 w-32"
        />
      </div>

      {/* Lộ trình phù hợp */}
      <div className="bg-yellow-400 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">LỘ TRÌNH PHÙ HỢP</h2>
        <ul className="space-y-2">
          {renderList([
            "Lộ trình bài bản từ zero tới chuyên nghiệp",
            "Học, luyện tập code, kỹ thuật phân tích, soft skill",
            "Huấn luyện để phát triển năng lực và niềm đam mê",
          ])}
        </ul>
      </div>

      {/* Hệ thống học tập */}
      <div className="bg-sky-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">HỆ THỐNG HỌC TẬP</h2>
        <ul className="space-y-2">
          {renderList([
            "Tự động chấm điểm trắc nghiệm...",
            "Thống kê lượt xem video, làm bài...",
            "So sánh khả năng học của học viên...",
          ])}
        </ul>
      </div>

      {/* Giảng viên */}
      <div className="bg-yellow-400 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">GIẢNG VIÊN</h2>
        <ul className="space-y-2">
          {renderList([
            "Tương tác cùng mentor và giảng viên",
            "Review code và nhận xét góp ý",
            "Chấm điểm thảo luận giữa học viên",
          ])}
        </ul>
      </div>

      {/* Chứng nhận */}
      <div className="bg-teal-400 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">CHỨNG NHẬN</h2>
        <ul className="space-y-2">
          {renderList([
            "Chấm bài và vấn đáp trực tuyến",
            "Hệ thống CV online độc đáo",
            "Kết nối CV với đối tác của Vlearning",
          ])}
        </ul>
      </div>
    </div>
  );
};

export default CourseOverview;
