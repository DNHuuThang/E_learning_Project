import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../../../service/userService";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  taiKhoan: yup
    .string()
    .trim()
    .required("Tài khoản không được để trống")
    .min(4, "Tài khoản phải có ít nhất 4 ký tự"),

  matKhau: yup
    .string()
    .trim()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),

  hoTen: yup.string().trim().required("Họ tên không được để trống"),

  email: yup
    .string()
    .trim()
    .required("Email không được để trống")
    .email("Email không hợp lệ"),

  soDT: yup
    .string()
    .trim()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9]{9,11}$/, "Số điện thoại không hợp lệ"),

  maLoaiNguoiDung: yup
    .string()
    .trim()
    .required("Vui lòng chọn loại người dùng"),
});

const InfoUserUpdate = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "GP01",
      email: "",
    },
  });

  const fetchInfoUserUpdate = async () => {
    try {
      const responseInfoUserUpdate = await userService.postInfoUser();
      const data = responseInfoUserUpdate.data;

      Object.keys(data).forEach((key) => setValue(key, data[key]));
    } catch (error) {
      console.log("Lỗi lấy thông tin user:", error);
    }
  };

  useEffect(() => {
    fetchInfoUserUpdate();
  }, []);

  const handleSubmitValuesForm = async (dataForm) => {
    console.log("dataForm", dataForm);
    try {
      await userService.putInfoUserUpdate(dataForm);

      toast.success("Cập nhật thông tin thành công!");
    } catch (error) {
      console.log("Lỗi cập nhật:", error);
      toast.error("Cập nhật thất bại!");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-teal-600 mb-8">
          Cập nhật thông tin cá nhân
        </h2>

        <form
          onSubmit={handleSubmit(handleSubmitValuesForm)}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Tài khoản */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tài khoản
              </label>
              <input
                {...register("taiKhoan")}
                disabled
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Mật khẩu */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                {...register("matKhau", {
                  required: "Mật khẩu không được để trống",
                })}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500"
              />
              {errors.matKhau && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.matKhau.message}
                </p>
              )}
            </div>

            {/* Họ tên */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Họ tên <span className="text-red-500">*</span>
              </label>
              <input
                {...register("hoTen", {
                  required: "Họ tên không được để trống",
                })}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500"
              />
              {errors.hoTen && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.hoTen.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email không được để trống",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email không hợp lệ",
                  },
                })}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Số điện thoại */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                {...register("soDT", {
                  required: "Số điện thoại không được để trống",
                  pattern: {
                    value: /^[0-9]{9,11}$/,
                    message: "Số điện thoại không hợp lệ",
                  },
                })}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500"
              />
              {errors.soDT && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.soDT.message}
                </p>
              )}
            </div>

            {/* Loại người dùng */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Loại người dùng
              </label>
              <select
                {...register("maLoaiNguoiDung")}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500"
              >
                <option value="">-- Chọn loại --</option>
                <option value="HV">Học viên</option>
                <option value="GV">Giảng viên</option>
              </select>
            </div>

            {/* Mã nhóm */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mã nhóm
              </label>
              <input
                {...register("maNhom")}
                disabled
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Nút Submit */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-8 rounded-lg transition"
            >
              Cập nhật thông tin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoUserUpdate;
