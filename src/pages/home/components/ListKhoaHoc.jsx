import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListKhoaHoc } from "../../../stores/khoahoc";
import { khoahocService } from "../../../service/khoahocService";
import { Card, Rate, Pagination } from "antd";

const { Meta } = Card;

const ListKhoaHoc = () => {
  const dispatch = useDispatch();
  const listKhoaHoc = useSelector((state) => state.khoahocSlice.listKhoaHoc);
  console.log("listKhoaHoc", listKhoaHoc);

  // State lưu page cho từng nhóm
  const [pageByCategory, setPageByCategory] = useState({});

  const fetchListKhoaHoc = async () => {
    try {
      const responseListKhoaHoc = await khoahocService.getListKhoaHoc("GP01");
      dispatch(setListKhoaHoc(responseListKhoaHoc.data));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchListKhoaHoc();
  }, []);

  // Gom khóa học theo danh mục
  const groupByCategory = listKhoaHoc.reduce((acc, course) => {
    const category = course.danhMucKhoaHoc?.tenDanhMucKhoaHoc || "Khác";
    if (!acc[category]) acc[category] = [];
    acc[category].push(course);
    return acc;
  }, {});

  // Mỗi hàng chỉ hiện 4 item
  const pageSize = 4;

  return (
    <div className="container mx-auto px-4 py-8">
      {Object.keys(groupByCategory).map((category) => {
        const courses = groupByCategory[category];
        const currentPage = pageByCategory[category] || 1;

        // Cắt dữ liệu theo page
        const startIndex = (currentPage - 1) * pageSize;
        const currentCourses = courses.slice(startIndex, startIndex + pageSize);

        return (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-yellow-600">
              {category}
            </h2>

            {/* Card list: chỉ 1 hàng */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {currentCourses.map((course) => (
                <Card
                  key={course.maKhoaHoc}
                  hoverable
                  cover={
                    <img
                      alt={course.tenKhoaHoc}
                      src={course.hinhAnh}
                      className="h-48 object-cover"
                    />
                  }
                  className="rounded-2xl shadow-md"
                >
                  <Meta
                    title={course.tenKhoaHoc}
                    description={course.moTa?.slice(0, 50) + "..."}
                  />
                  {/* Giá */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-400 line-through text-sm">
                        800.000đ
                      </span>
                      <span className="text-green-600 font-semibold text-lg">
                        400.000đ
                      </span>
                    </div>
                    <Rate
                      disabled
                      defaultValue={5}
                      className="text-yellow-500"
                    />
                  </div>
                  {/* Giảng viên */}
                  <div className="mt-2 text-sm text-gray-500">
                    Giảng viên: {course.nguoiTao?.hoTen}
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination cho từng nhóm */}
            {courses.length > pageSize && (
              <div className="mt-4 flex justify-center">
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={courses.length}
                  onChange={(page) =>
                    setPageByCategory((prev) => ({
                      ...prev,
                      [category]: page,
                    }))
                  }
                  showSizeChanger={false}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListKhoaHoc;
