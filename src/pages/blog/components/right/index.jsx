import React from "react";

const BlogRightPage = () => {
  return (
    <div>
      {/* Cột phải: sidebar */}
      <div className="w-full  space-y-6">
        {/* Box: Chủ đề được đề xuất */}
        <div className="border ">
          <div className="border-b-2 border-green-500 text-center py-2 font-semibold text-gray-700">
            Các chủ đề được đề xuất
          </div>
          <ul className="p-4 space-y-2 text-gray-600">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">
              Front-end / Mobile apps
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">
              UI / UX / Design
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">
              BACK-END
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">
              Thư viện
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">
              Chia sẻ người trong nghề
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">
              Châm ngôn IT
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">
              Chủ đề khác
            </li>
          </ul>
        </div>

        {/* Box: Bài đăng được đề xuất */}
        <div className="border rounded-md">
          <div className="border-b-2 border-green-500 text-center py-2 font-semibold text-gray-700">
            Bài đăng được đề xuất
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">
                Routing trong ReactJS
              </h3>
              <p className="text-sm text-gray-600">
                Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
              </p>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src="https://i.pravatar.cc/30?img=12"
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-700">Nguyễn Văn</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Lập trình hướng đối tượng OOP
              </h3>
              <p className="text-sm text-gray-600">
                Chúng ta sẽ cùng nhau tìm hiểu cách OOP trong ReactJS...
              </p>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src="https://i.pravatar.cc/30?img=20"
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-700">Nguyễn Văn Vũ</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Xử lý Bất Đồng Bộ Trong Javascript
              </h3>
              <p className="text-sm text-gray-600">
                Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian
                delay...
              </p>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src="https://i.pravatar.cc/30?img=33"
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-700">Nguyễn Minh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRightPage;
