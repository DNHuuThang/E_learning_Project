import React from "react";

const InfoDetails = () => {
  return (
    <>
      {/* SECTION 1 - ảnh bên phải */}
      <section className="w-full py-12 sm:py-16 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
          {/* Cột text */}
          <div className="pl-10">
            <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-[#41b294] ">
              V learning ?
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-normal">
              Nơi hội tụ kiến thức
            </h2>
            <p className="text-gray-500 text-xl first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:text-[#41b294] leading-loose">
              Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để
              hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được
              xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của
              một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ
              toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một
              lớp học trực tuyến thú vị và hấp dẫn.
            </p>
          </div>

          {/* Cột hình ảnh */}
          <div
            className="flex justify-center  bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage:
                "url('https://demo2.cybersoft.edu.vn/static/media/solutions-hero-green-bg.15753edf.svg')",
            }}
          >
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png"
              alt="it"
              className=" w-2/3 sm:w-3/4 md:w-3/4  lg:w-2/3 "
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 - ảnh bên trái */}
      <section className="w-full py-12 sm:py-16 lg:py-10 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10">
          {/* Cột hình ảnh */}
          <div
            className="flex justify-center  bg-no-repeat bg-contain bg-center order-2 "
            style={{
              backgroundImage:
                "url('https://demo2.cybersoft.edu.vn/static/media/solutions-hero-royalBlue-bg.e6aa17e0.svg')",
            }}
          >
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png"
              alt="it"
              className="w-2/3 sm:w-3/4 md:w-3/4  lg:w-2/3"
            />
          </div>

          {/* Cột text */}
          <div className="pl-10 order-1 md:order-1">
            <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-[#41b294] ">
              Chương trình học V learning
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-normal">
              Hệ thống học hàng đầu
            </h2>
            <p className="text-gray-500 text-xl first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:text-[#b25841] leading-loose">
              Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên
              của các trường đại học danh tiếng trong thành phố: Đại học CNTT,
              KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học
              máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành
              trên một máy riêng.100% các buổi học đều là thực hành trên máy
              tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho
              học viên những kiến thức hữu ích nhất, sát với thực tế nhất.
            </p>
          </div>
        </div>
      </section>
      {/* SETION 3  */}
      <section className="w-full py-12 sm:py-16 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
          {/* Cột text */}
          <div className="pl-10">
            <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-[#41b294] ">
              Tầm nhìn V learning
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-normal">
              Đào tạo lập trình chuyên sâu
            </h2>
            <p className="text-gray-500 text-xl first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:text-[#41b294] leading-loose">
              Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu
              khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự
              phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện
              nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành
              cường quốc về phát triển phần mềm.giúp người học phát triển cả tư
              duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng
              đáp ứng mọi nhu cầu của doanh nghiệp.
            </p>
          </div>

          {/* Cột hình ảnh */}
          <div
            className="flex justify-center  bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage:
                "url('https://demo2.cybersoft.edu.vn/static/media/solutions-hero-green-bg.15753edf.svg')",
            }}
          >
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png"
              alt="it"
              className=" w-2/3 sm:w-3/4 md:w-3/4  lg:w-2/3 "
            />
          </div>
        </div>
      </section>
      {/* SETION 4 */}
      <section className="w-full py-12 sm:py-16 lg:py-10 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10">
          {/* Cột hình ảnh */}
          <div
            className="flex justify-center  bg-no-repeat bg-contain bg-center order-2"
            style={{
              backgroundImage:
                "url('https://demo2.cybersoft.edu.vn/static/media/solutions-hero-royalBlue-bg.e6aa17e0.svg')",
            }}
          >
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/students.fc2d9ab7.png"
              alt="it"
              className="w-2/3 sm:w-3/4 md:w-3/4  lg:w-2/3"
            />
          </div>

          {/* Cột text */}
          <div className="pl-10">
            <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-[#41b294] ">
              Sứ mệnh V learning
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-normal">
              Phương pháp đào tạo hiện đại
            </h2>
            <p className="text-gray-500 text-xl first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:text-[#b25841] leading-loose">
              Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền
              tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương
              pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực
              tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ
              các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát
              triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt
              đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoDetails;
