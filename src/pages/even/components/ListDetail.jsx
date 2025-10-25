import React from "react";
import { Avatar } from "antd";

const founders = [
  {
    id: 1,
    name: "NGUYỄN NHẬT",
    title: "CEO TECHVIET PRODUCTION",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=nhat",
    realAvatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=nhat",
  },
  {
    id: 2,
    name: "NGUYỄN NHẬT NAM",
    title: "CEO TECHVIET PRODUCTION",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=nam",
    realAvatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=nam",
  },
  {
    id: 3,
    name: "NGUYỄN NAM",
    title: "CEO TECHVIET PRODUCTION",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=nguyennam",
    realAvatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=nguyennam",
  },
  {
    id: 4,
    name: "JHONNY ĐẶNG",
    title: "CEO TECHVIET PRODUCTION",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=jhonny",
    realAvatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=jhonny",
  },
  {
    id: 5,
    name: "LÊ THỊ HỒNG",
    title: "CTO TECHVIET PRODUCTION",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=hong",
    realAvatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=hong",
  },
  {
    id: 6,
    name: "TRẦN MINH",
    title: "COO TECHVIET PRODUCTION",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=minh",
    realAvatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=minh",
  },
  {
    id: 7,
    name: "PHẠM ANH",
    title: "CFO TECHVIET PRODUCTION",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=anhpham",
    realAvatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=anhpham",
  },
  {
    id: 8,
    name: "ĐINH QUANG",
    title: "CMO TECHVIET PRODUCTION",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=quang",
    realAvatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=quang",
  },
];

const ListDetail = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage:
          "url('https://demo2.cybersoft.edu.vn/static/media/lightTech.32807735.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gray-800/40 bg-opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-yellow-400 uppercase mb-10">
          CÁC NHÀ ĐỒNG SÁNG TẠO
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {founders.map((person) => (
            <div
              key={person.id}
              className="relative bg-opacity-10 overflow-hidden  hover:scale-105 transition-transform duration-300 "
            >
              <div className="absolute top-3 left-3 z-10 ">
                <Avatar
                  src={person.realAvatar}
                  size={60}
                  className=" !border-4 !border-white shadow-md"
                />
              </div>

              <img
                src={person.avatar}
                alt={person.name}
                className="w-60 h-64 object-cover bg-pink-200 hover:scale-105 transition-transform duration-300"
              />

              <div className="pt-4 text-white ">
                <h3 className="font-bold text-lg uppercase">{person.name}</h3>
                <p className="text-sm opacity-90">{person.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListDetail;
