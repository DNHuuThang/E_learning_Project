import React, { useEffect, useState } from "react";
import { userService } from "../../service/userService";
import { useNavigate } from "react-router-dom";

const InfoUser = () => {
  const [infoUser, setInfoUser] = useState(null);
  const navigate = useNavigate();
  const fetchInfoUser = async () => {
    try {
      const response = await userService.postInfoUser();
      setInfoUser(response.data);
    } catch (error) {
      console.error("Lỗi lấy thông tin user:", error);
    }
  };

  useEffect(() => {
    fetchInfoUser();
  }, []);

  const handleRedirectInfoKhoaHocUser = () => {
    navigate("/info-khoa-hoc-user");
  };

  const handleRedirectUserUpdate = () => {
    navigate("/info-update");
  };

  if (!infoUser) return <p className="text-center mt-10">Đang tải...</p>;

  return (
    <div className="flex flex-col gap-10 p-6 md:p-10 bg-white rounded-xl shadow-md">
      {/* --- Cột trái và phải: thông tin cơ bản --- */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* --- Ảnh avatar và nút --- */}
        <div className="flex flex-col items-center md:w-1/3 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
            alt="avatar"
            className="w-40 h-40 rounded-full border-4 border-teal-400 object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">{infoUser.hoTen}</h2>
          <p className="text-gray-600 mb-4">Lập trình viên Front-end</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full">
            Hồ sơ cá nhân
          </button>
        </div>

        {/* --- Thông tin cá nhân --- */}
        <div className="flex-1 space-y-6">
          <div className="border-b-2 border-teal-500 flex gap-4">
            <button className="text-gray-700 font-semibold pb-2 border-b-4 border-teal-500">
              Thông tin cá nhân
            </button>
            <button
              onClick={handleRedirectInfoKhoaHocUser}
              className="text-gray-700 font-semibold pb-2 border-b-4 border-transparent hover:border-teal-500"
            >
              Khóa học
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            <p>
              <span className="font-semibold">Email:</span> {infoUser.email}
            </p>
            <p>
              <span className="font-semibold">Tài khoản:</span>{" "}
              {infoUser.taiKhoan}
            </p>
            <p>
              <span className="font-semibold">Họ và tên:</span> {infoUser.hoTen}
            </p>
            <p>
              <span className="font-semibold">Nhóm:</span> {infoUser.maNhom}
            </p>
            <p>
              <span className="font-semibold">Số điện thoại:</span>{" "}
              {infoUser.soDT}
            </p>
            <p>
              <span className="font-semibold">Đối tượng:</span> Học viên
            </p>
          </div>

          <button
            onClick={handleRedirectUserUpdate}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded"
          >
            CẬP NHẬT
          </button>
        </div>
      </div>

      {/* --- KỸ NĂNG CỦA TÔI --- */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          KĨ NĂNG CỦA TÔI
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* --- Cột trái: thanh tiến độ --- */}
          <div className="flex-1 space-y-6">
            {/* HTML */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-200 text-orange-700 px-4 py-1 rounded font-semibold">
                  HTML
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-orange-300 to-orange-400 w-[95%]"></div>
              </div>
            </div>

            {/* CSS */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-pink-200 text-pink-700 px-4 py-1 rounded font-semibold">
                  CSS
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-pink-300 to-pink-400 w-[80%]"></div>
              </div>
            </div>

            {/* JS */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-yellow-200 text-yellow-700 px-4 py-1 rounded font-semibold">
                  JS
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-yellow-300 to-yellow-400 w-[70%]"></div>
              </div>
            </div>

            {/* REACT */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-teal-900 text-white px-4 py-1 rounded font-semibold">
                  REACT
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-teal-700 to-teal-800 w-[60%]"></div>
              </div>
            </div>
          </div>

          {/* --- Cột phải: thống kê --- */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/3">
            {[
              { label: "Giờ học", value: 80 },
              { label: "Điểm tổng", value: 80 },
              { label: "Buổi học", value: 40 },
              { label: "Cấp độ", value: "Trung cấp" },
              { label: "Học lực", value: "Khá" },
              { label: "Bài tập", value: 100 },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-teal-500 text-white rounded-lg py-4 px-3 text-center flex flex-col items-center justify-center"
              >
                <span className="text-lg font-semibold">{item.label}</span>
                <span className="text-2xl font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
