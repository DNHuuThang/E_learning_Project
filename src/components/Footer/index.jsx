import { Input, Button } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#edf4f9] text-gray-700 py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="">
          <div className="flex items-center mb-4">
            <h2
              className="text-2xl font-bold  flex items-center transform hover:scale-105 duration-800"
              style={{ textShadow: "5px -2px 3px #54d2c0" }}
            >
              <span className="mr-1 text-teal-600 text-5xl ">V</span>learning
            </h2>
          </div>

          <ul className="space-y-3 text-base ">
            <li className="flex items-center gap-3 transform hover:scale-105 duration-800">
              <div className="bg-teal-500 text-white p-2 rounded-full">
                <PhoneOutlined />
              </div>
              <span className="hover:text-teal-700 font-bold">
                1800-123-4567
              </span>
            </li>
            <li className="flex items-center gap-3 transform hover:scale-105 duration-800">
              <div className="bg-teal-500 text-white p-2 rounded-full">
                <MailOutlined />
              </div>
              <span className="hover:text-teal-700 font-bold">
                devit@gmail.com
              </span>
            </li>
            <li className="flex items-center gap-3 transform hover:scale-105 duration-800">
              <div className="bg-teal-500 text-white p-2 rounded-full">
                <EnvironmentOutlined />
              </div>
              <span className="hover:text-teal-700 font-bold">Đồng Nai</span>
            </li>
          </ul>
        </div>

        {/* Cột 2: Liên kết */}
        <div className="lg:pl-30">
          <h3 className="text-xl font-bold mb-4">Liên kết</h3>
          <ul className="space-y-2 ">
            <li className="flex items-center transform hover:scale-105 duration-800">
              <IoIosArrowForward /> Trang chủ
            </li>
            <li className="flex items-center transform hover:scale-105 duration-800">
              <IoIosArrowForward /> Dịch vụ
            </li>
            <li className="flex items-center transform hover:scale-105 duration-800">
              <IoIosArrowForward /> Nhóm
            </li>
            <li className="flex items-center transform hover:scale-105 duration-800">
              <IoIosArrowForward /> Blog
            </li>
          </ul>
        </div>

        {/* Cột 3: Khóa học */}
        <div className="lg:pl-10">
          <h3 className="text-xl font-bold mb-4">Khóa học</h3>
          <ul className="space-y-2">
            <li className="flex items-center transform hover:scale-105 duration-800">
              <IoIosArrowForward />
              Front End
            </li>
            <li className="flex items-center transform hover:scale-105 duration-800">
              <IoIosArrowForward />
              Back End
            </li>
            <li className="flex items-center transform hover:scale-105 duration-800">
              <IoIosArrowForward />
              Full Stack
            </li>
            <li className="flex items-center transform hover:scale-105 duration-800">
              <IoIosArrowForward />
              Node Js
            </li>
          </ul>
        </div>

        {/* Cột 4: Form đăng ký tư vấn */}
        <div className="lg:pr-10">
          <h3 className="text-xl font-bold mb-4">Đăng kí tư vấn</h3>
          <div className="flex flex-col gap-3">
            <Input placeholder="Họ và tên" />
            <Input placeholder="Email" />
            <Input placeholder="Số điện thoại" />
            <Button
              type="primary"
              className="!bg-yellow-500 !border-none !text-white transition-transform duration-500 hover:scale-105 hover:!bg-yellow-400"
            >
              ĐĂNG KÍ
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-5 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between text-center text-sm">
        <p>Copyright © 2025. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <InstagramOutlined className="text-teal-500 text-xl cursor-pointer" />
          <FacebookOutlined className="text-teal-500 text-xl cursor-pointer" />
          <TwitterOutlined className="text-teal-500 text-xl cursor-pointer" />
          {/* <div className="bg-teal-500 text-white p-2 rounded-md cursor-pointer hover:bg-teal-600">
            <ArrowUpOutlined />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
