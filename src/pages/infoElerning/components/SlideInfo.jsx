import React from "react";

const SlideInfo = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-80"
      style={{
        backgroundImage:
          "url('https://demo2.cybersoft.edu.vn/static/media/bgAbout.19ac825c.png')",
      }}
    >
      <div>
        <h3 className="text-center text-3xl sm:text-3xl lg:text-4xl font-medium text-[#41b294]">
          V learning học là vui
        </h3>
        <h1 className="text-center text-3xl sm:text-3xl lg:text-5xl font-bold text-yellow-400">
          Cùng nhau khám phá nhưng điều mới mẻ
        </h1>
        <p className="text-center text-2xl sm:text-2xl lg:text-2xl font-light text-white">
          Học đi đôi với hành
        </p>
      </div>
    </div>
  );
};

export default SlideInfo;
