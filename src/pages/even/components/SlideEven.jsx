import React, { useEffect, useState } from "react";

const SlideEven = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-25T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center  text-white"
      style={{
        backgroundImage:
          "url('https://demo2.cybersoft.edu.vn/static/media/backroundTech.a989a5f8.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 "></div>
      <div
        className="absolute top-0 bottom-0 right-0 w-full sm:w-[70%] lg:w-[60%] bg-no-repeat bg-contain bg-right z-[1]"
        style={{
          backgroundImage:
            "url('https://demo2.cybersoft.edu.vn/static/media/high-techbrain.2f38d2ab.png')",
        }}
      ></div>
      <div className="relative text-start px-4 md:px-8 max-w-4xl">
        <div className="flex flex-wrap justify-start gap-5 text-3xl sm:text-4xl font-bold mb-6">
          <div className="flex flex-col items-center">
            <span className="text-yellow-400">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base">NGÀY</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-500">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base">GIỜ</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-pink-500">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base">PHÚT</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-purple-500">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base">GIÂY</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight">
          SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2021
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
          20 - 25 THÁNG 12, 2025, VIỆT NAM
        </p>
      </div>
    </div>
  );
};

export default SlideEven;
