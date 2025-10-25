import React from "react";
import BlogCard from "./components/left";
import { SoundOutlined } from "@ant-design/icons";
import BlogRightPage from "./components/right";

const BlogListPage = () => {
  const courses = [
    {
      title: "Học ReactJS từ cơ bản đến nâng cao",
      author: "Jhony Đặng",
      image: "https://picsum.photos/seed/react1/800/400",
      likes: 350,
      comments: 120,
      views: 500,
      desc: "Khóa học giúp bạn làm chủ ReactJS và hiểu sâu về component, hook, context, routing,...",
    },
    {
      title: "Xây dựng ứng dụng web với React + NodeJS",
      author: "Nguyễn Minh",
      image: "https://picsum.photos/seed/react2/800/400",
      likes: 420,
      comments: 90,
      views: 600,
      desc: "Học cách kết hợp frontend React với backend NodeJS để tạo ứng dụng fullstack hoàn chỉnh.",
    },
    {
      title: "React Hooks và Quản lý State hiệu quả",
      author: "Lê Anh Tuấn",
      image: "https://picsum.photos/seed/react3/800/400",
      likes: 270,
      comments: 80,
      views: 450,
      desc: "Tìm hiểu chi tiết về useState, useEffect, useMemo, useContext và cách tối ưu hiệu năng React.",
    },
    {
      title: "React Hooks và Quản lý State hiệu quả",
      author: "Lê Anh Tuấn",
      image: "https://picsum.photos/seed/react3/800/400",
      likes: 270,
      comments: 80,
      views: 450,
      desc: "Tìm hiểu chi tiết về useState, useEffect, useMemo, useContext và cách tối ưu hiệu năng React.",
    },
  ];
  return (
    <div className="p-5">
      {/* Nhãn */}
      <div className="flex items-center gap-2 px-4 py-3 text-pink-500 font-semibold text-sm">
        <SoundOutlined />
        <span>PHÙ HỢP VỚI BẠN</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
          {courses.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>

        <div className=" flex lg:justify-end ">
          <BlogRightPage />
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
