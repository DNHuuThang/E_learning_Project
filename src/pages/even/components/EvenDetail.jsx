import React from "react";

const EvenDetail = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/it.ef68b551.png"
            alt="Sự kiện công nghệ"
            className="w-4/5 sm:w-3/5 lg:w-full object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#a8326e] uppercase">
            Sự kiện công nghệ dành cho Startup
          </h2>

          <p className="text-gray-700 font-medium">
            Nơi gặp gỡ của những tư tưởng lớn
          </p>

          <p className="text-gray-500 leading-relaxed">
            Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam
            tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao
            gồm <strong>Artificial Intelligence</strong> (trí tuệ nhân tạo),{" "}
            <strong>Internet of Things</strong> (Internet vạn vật),{" "}
            <strong>Blockchain</strong> (Chuỗi khối) và{" "}
            <strong>Augmented reality / Virtual Reality</strong> (Thực tế tăng
            cường / Thực tế ảo).
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300">
              THAM GIA
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md transition duration-300">
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvenDetail;
