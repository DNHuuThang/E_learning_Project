import React from "react";
import { Button } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  MessageOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const BlogCard = ({ title, author, image, likes, comments, views, desc }) => {
  return (
    <div className=" w-full h-full  bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Ảnh minh họa */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={image}
          alt="blog-cover"
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Nội dung */}
      <div className="p-5 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 hover:text-yellow-600 transition-colors">
          {title}
        </h2>

        {/* Tác giả */}
        <p className="text-right text-sm text-gray-600">
          Đăng bởi{" "}
          <span className="text-pink-500 font-medium cursor-pointer hover:underline">
            {author}
          </span>
        </p>

        {/* Thông tin like, comment, view */}
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <span className="flex items-center gap-1">
            <LikeOutlined className="text-green-500" /> {likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageOutlined className="text-green-500" /> {comments}
          </span>
          <span className="flex items-center gap-1">
            <EyeOutlined className="text-green-500" /> {views}
          </span>
        </div>

        {/* Mô tả */}
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

        <Button
          type="primary"
          className="!bg-yellow-500 !border-none !rounded-xl !px-6 !py-5 !font-semibold hover:!scale-105 hover:!bg-yellow-400 transition-all duration-300"
        >
          XEM THÊM
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
