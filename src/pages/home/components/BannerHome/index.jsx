import React from "react";

const BannerHome = () => {
  return (
    <section className="relative w-full bg-white py-8 sm:py-10 md:py-12 lg:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 lg:px-0 relative">
        {/* Tam giác vàng */}
        <div
          className="
            absolute w-0 h-0
            border-l-[15px] sm:border-l-[18px] md:border-l-[20px] lg:border-l-[25px] border-l-transparent
            border-r-[15px] sm:border-r-[18px] md:border-r-[20px] lg:border-r-[25px] border-r-transparent
            border-b-[35px] sm:border-b-[40px] md:border-b-[50px] lg:border-b-[60px] border-b-yellow-400
            -rotate-45
            bottom-[95%] sm:bottom-[100%] md:bottom-[100%] lg:bottom-[100%]
            left-[2%] sm:left-[8%] md:left-[5%] lg:left-[0%]
          "
        />

        {/* Box chấm góc trái */}
        <div
          className="
            absolute 
            bottom-[88%] sm:bottom-[90%] md:bottom-[90%] lg:bottom-[90%]
            left-[2%] sm:left-[10%] md:left-[5%] lg:left-[0%]
            h-10 w-20 sm:h-14 sm:w-28 md:h-20 md:w-36 lg:h-20 lg:w-36

          "
          style={{
            backgroundImage:
              "radial-gradient(#10b981 10%, transparent 11%), radial-gradient(#10b981 10%, transparent 11%)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Box chấm góc phải */}
        <div
          className="absolute 
          top-[75%] sm:top-[78%] md:top-[80%] lg:top-[80%] 
          left-[30%] sm:left-[35%] md:left-[38%] lg:left-[40%] 
          h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-20
        "
        >
          <div
            className="absolute h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(#ef4444 10%, transparent 11%), radial-gradient(#ef4444 10%, transparent 11%)",
              backgroundSize: "10px 10px",
            }}
          />
          <div
            className="absolute h-full w-full left-[15%] sm:left-[18%] md:left-[20%] lg:left-[25%]"
            style={{
              backgroundImage:
                "radial-gradient(#ef4444 10%, transparent 11%), radial-gradient(#ef4444 10%, transparent 11%)",
              backgroundSize: "10px 10px",
            }}
          />
        </div>

        {/* Máy bay giấy */}
        <img
          src="https://demo2.cybersoft.edu.vn/static/media/paper_plane.93dfdbf5.png"
          alt="Paper plane"
          className="
            absolute 
            top-[0%] sm:top-[0%] md:top-[5%] lg:top-[10%] 
            left-[70%] sm:left-[65%] md:left-[30%] lg:left-[30%] 
            w-[20%] sm:w-[15%] md:w-[15%] lg:w-[12%]
          "
        />

        {/* Nội dung chính */}
        <div className="mt-8 sm:mt-10 md:mt-10 lg:mb-40 ml-4 sm:ml-6 md:ml-8 lg:ml-20 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight lg:leading-tight">
            Chào mừng <br /> đến với môi trường{" "}
            <div className="text-teal-500 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
              {"Vlearning".split("").map((ch, i) => (
                <span
                  key={i}
                  className="fade-in inline-block"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </h1>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded">
            BẮT ĐẦU NÀO
          </button>
        </div>

        {/* Hình minh họa bên phải */}
        <div className="relative flex justify-center mt-8 md:mt-0">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/slider2.f170197b.png"
            alt="Banner"
            className="max-w-[80%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[100%] max-h-[250px] sm:max-h-[350px] md:max-h-[600px] lg:max-h-[100%] object-contain relative z-10"
          />

          {/* Các hình trang trí */}
          <img
            src="http://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
            alt="clouds"
            className="absolute 
              bottom-[55%] sm:bottom-[60%] md:bottom-[65%] lg:bottom-[90%] 
              left-[5%] sm:left-[6%] md:left-[8%] lg:left-[0%] 
              w-[9%] sm:w-[11%] md:w-[13%] lg:w-[15%] 
              opacity-70 z-10 cloud-move
"
          />
          <img
            src="http://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
            alt="clouds2"
            className="absolute 
              top-[12%] sm:top-[11%] md:top-[10%] lg:top-[10%] 
              left-[35%] sm:left-[33%] md:left-[30%] lg:left-[25%] 
              w-[12%] sm:w-[13%] md:w-[14%] lg:w-[15%] 
              opacity-70 z-10 cloud-move
            "
          />
          <img
            src="http://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
            alt="clouds3"
            className="absolute 
              top-[26%] sm:top-[26%] md:top-[25%] lg:top-[25%] 
              left-[10%] sm:left-[12%] md:left-[13%] lg:left-[15%] 
              w-[12%] sm:w-[13%] md:w-[14%] lg:w-[15%] 
              opacity-70 z-10 cloud-move
              "
          />
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/code_slider.8c12bbb4.png"
            alt="icon code"
            className="absolute 
              top-[40%] sm:top-[42%] md:top-[45%] lg:top-[50%] 
              right-[20%] sm:right-[59%] md:right-[60%] lg:right-[67%] 
              w-[12%] sm:w-[10%] md:w-[14%] lg:w-[15%] 
              z-10 fade-up
              "
          />
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/message_slider.6835c478.png"
            alt="icon message"
            className="absolute 
              top-[35%] sm:top-[40%] md:top-[38%] lg:top-[42%] 
              left-[15%] sm:left-[44%] md:left-[40%] lg:left-[40%] 
              w-[12%] sm:w-[10%] md:w-[14%] lg:w-[15%] 
              z-10 swing-arc
              "
          />
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
