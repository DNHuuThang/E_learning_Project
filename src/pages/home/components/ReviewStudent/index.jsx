import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewStudent = () => {
  return (
    <div className="w-full bg-white py-12 px-6 relative overflow-hidden">
      {/* Tam giác vàng */}
      <div
        className="
          absolute w-0 h-0
          border-l-[15px] sm:border-l-[18px] md:border-l-[20px] lg:border-l-[25px] border-l-transparent
          border-r-[15px] sm:border-r-[18px] md:border-r-[20px] lg:border-r-[25px] border-r-transparent
          border-b-[35px] sm:border-b-[40px] md:border-b-[50px] lg:border-b-[60px] border-b-yellow-400
          -rotate-45
          top-4 left-4
        "
      />

      {/* Box chấm góc trái */}
      <div
        className="
          absolute 
          top-16 left-10
          h-10 w-20 sm:h-14 sm:w-28 md:h-20 md:w-36 lg:h-20 lg:w-36
        "
        style={{
          backgroundImage:
            "radial-gradient(#10b981 10%, transparent 11%), radial-gradient(#10b981 10%, transparent 11%)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* Nội dung chính */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Avatar bên trái */}
        <div className="flex justify-center md:justify-end lg:translate-x-[-30%]">
          <div className="relative rounded-[10px_100px_110px] bg-pink-300 w-64 h-64 flex items-center justify-center">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png"
              alt="avatar"
              className="w-40 h-40 object-cover"
            />
          </div>
        </div>

        {/* Nội dung bên phải */}
        <div>
          <FaQuoteLeft className="text-pink-400 text-1xl mb-4" />
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
            trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
            được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng
            lập và giảng viên dày kinh nghiệm. Thực sự rất hay và hấp dẫn.
          </p>
          <h3 className="text-pink-500 font-semibold">Nhi Dev</h3>
          <p className="text-gray-400 text-sm">Học viên xuất sắc</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewStudent;
