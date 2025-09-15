import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    img: "https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png",
    number: 9000,
    label: "Học viên",
  },
  {
    id: 2,
    img: "https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png",
    number: 1000,
    label: "Khóa học",
  },
  {
    id: 3,
    img: "https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png",
    number: 33200,
    label: "Giờ học",
  },
  {
    id: 4,
    img: "https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png",
    number: 400,
    label: "Giảng viên",
  },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true); // bắt đầu nhảy số khi scroll tới
          observer.disconnect(); // ngắt theo dõi để chỉ chạy 1 lần
        }
      },
      { threshold: 0.3 } // hiển thị 30% là bắt đầu
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f0f8ff] py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.id}
            className="  hover:shadow-lg transition duration-300 p-6 text-center"
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-14 sm:w-16 mx-auto lg:w-25 mb-3"
            />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">
              {startCount ? (
                <CountUp end={item.number} duration={2.5} separator="" />
              ) : (
                0
              )}
            </p>
            <p className="text-sm sm:text-base font-bold text-gray-700 mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
