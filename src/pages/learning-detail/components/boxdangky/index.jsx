import {
  DatabaseOutlined,
  FieldTimeOutlined,
  ReadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { khoahocService } from "../../../../service/khoahocService";
import { useParams } from "react-router-dom";
import { userService } from "../../../../service/userService";
import { localStorageUtil } from "../../../../components/util/localStorage";
import { toast } from "sonner";

const FormDangKyPage = () => {
  const { khoahocId } = useParams();
  const [khoaHoc, setKhoaHoc] = useState(null);

  const fetchKhoaHocDetail = async () => {
    try {
      const responKhoaHocDetail = await khoahocService.getKhoaHocDetail(
        khoahocId
      );
      setKhoaHoc(responKhoaHocDetail.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (khoahocId) fetchKhoaHocDetail();
  }, [khoahocId]);

  const handleDangKy = async () => {
    console.log("khoahocId", khoahocId);
    try {
      const userLogin = localStorageUtil.get("INFO_USER");

      if (!userLogin) {
        toast.warning("Vui lòng đăng nhập trước khi đăng ký khóa học!");
        return;
      }

      const dataDangKy = {
        maKhoaHoc: khoahocId,
        taiKhoan: userLogin.taiKhoan,
      };

      const result = await userService.postDangKyKhoaHoc(dataDangKy);
      toast.success("Đăng ký khóa học thành công!");
      console.log(result.data);
    } catch (error) {
      toast.error("Đăng ký khóa học thất bại!");
      console.error("Đăng ký lỗi:", error);
    }
  };

  if (!khoaHoc) return <p>Đang tải...</p>;
  return (
    <div>
      {" "}
      {/* Cột phải */}
      <div className="bg-white p-6   space-y-4 flex flex-col justify-center mb-[15px] px-[30px] py-[10px] shadow-[1px_1px_10px_4px_#dadada]">
        <div className="text-2xl font-bold text-yellow-500 flex justify-end">
          ⚡ 500.000đ
        </div>
        <Button
          onClick={handleDangKy}
          type=""
          block
          className="!border !border-yellow-500 !text-yellow-500 !text-sm !font-bold uppercase transition-all duration-500 hover:!bg-yellow-500 hover:!text-white hover:scale-[0.99]"
        >
          ĐĂNG KÝ
        </Button>

        <div className="space-y-10 divide-y divide-gray-200 text-gray-700">
          <p className="flex items-center pb-2">
            <UserOutlined className="mr-2 text-yellow-500 text-lg" />
            Ghi danh:{" "}
            <span className="ml-1 font-bold text-gray-800">
              {khoaHoc.soLuongHocVien} học viên
            </span>
          </p>

          <p className="flex items-center pt-2 pb-2">
            <FieldTimeOutlined className="mr-2 text-yellow-500 text-lg" />
            Thời gian:{" "}
            <span className="ml-1 font-medium text-gray-800">18 giờ</span>
          </p>

          <p className="flex items-center pt-2 pb-2">
            <ReadOutlined className="mr-2 text-yellow-500 text-lg" />
            Bài học: <span className="ml-1 font-medium text-gray-800">10</span>
          </p>

          <p className="flex items-center pt-2 pb-2">
            <VideoCameraOutlined className="mr-2 text-yellow-500 text-lg" />
            Video: <span className="ml-1 font-medium text-gray-800">14</span>
          </p>

          <p className="flex items-center pt-2">
            <DatabaseOutlined className="mr-2 text-yellow-500 text-lg" />
            Trình độ:{" "}
            <span className="ml-1 font-medium text-gray-800">
              Người mới bắt đầu
            </span>
          </p>
          <Input
            className="!mt-4 hover:!border-yellow-500 hover:!text-yellow-500 hover:scale-[0.99] transition-all duration-500"
            placeholder="Nhập mã"
          />
        </div>
      </div>
    </div>
  );
};

export default FormDangKyPage;
