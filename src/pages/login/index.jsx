import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-5xl min-h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Wrapper chứa 2 panel */}
        <div
          className={`absolute top-0 left-0 w-[200%] h-full flex p-8 transition-transform duration-700 ease-in-out  
            ${isLogin ? "translate-x-0" : "-translate-x-1/2"}`}
        >
          {/* Panel đăng nhập */}
          <div className=" w-1/4 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">Đăng nhập</h2>
            <p className="text-gray-500 mb-6">
              Hoặc sử dụng tài khoản đã đăng ký
            </p>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Vui lòng nhập tài khoản" }]}
              >
                <Input placeholder="Tài khoản" size="large" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
              >
                <Input.Password placeholder="Mật khẩu" size="large" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-40 mt-2 bg-teal-600 hover:bg-teal-700"
                size="large"
              >
                Đăng nhập
              </Button>
            </Form>
          </div>

          {/* Panel đăng ký */}
          <div className="w-1/4 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">Đăng ký</h2>
            <p className="text-gray-500 mb-6">
              Vui lòng nhập thông tin để tạo tài khoản mới
            </p>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="fullname"
                rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
              >
                <Input placeholder="Họ tên" size="large" />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Vui lòng nhập tài khoản" }]}
              >
                <Input placeholder="Tài khoản" size="large" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
              >
                <Input.Password placeholder="Mật khẩu" size="large" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Email không hợp lệ",
                  },
                ]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                ]}
              >
                <Input placeholder="Số điện thoại" size="large" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full mt-2 bg-teal-600 hover:bg-teal-700"
                size="large"
              >
                Đăng ký
              </Button>
            </Form>
          </div>
        </div>

        {/* Overlay panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-teal-400 to-yellow-400 flex items-center justify-center text-center text-white p-8 transition-transform duration-700 ease-in-out ${
            isLogin ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? "Xin chào!" : "Chào mừng bạn đã trở lại!"}
            </h2>
            <p className="mb-6">
              {isLogin
                ? "Vui lòng nhấn đăng ký để tạo tài khoản mới."
                : "Vui lòng đăng nhập để kết nối tài khoản của bạn."}
            </p>
            <Button
              ghost
              size="large"
              className="border-white text-white"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Đăng ký" : "Đăng nhập"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
