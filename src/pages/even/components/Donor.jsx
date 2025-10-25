import React from "react";

const donors = [
  {
    id: 1,
    name: "FACEBOOK",
    img: "https://demo2.cybersoft.edu.vn/static/media/meta.10fa2fa1.jpg",
  },
  {
    id: 2,
    name: "MICROSOFT",
    img: "https://demo2.cybersoft.edu.vn/static/media/microsoft.318b3280.jpg",
  },
  {
    id: 3,
    name: "GOOGLE",
    img: "https://demo2.cybersoft.edu.vn/static/media/Google-logo.f11902b5.jpg",
  },
  {
    id: 4,
    name: "AMAZON",
    img: "https://demo2.cybersoft.edu.vn/static/media/amazon.996890c4.jpg",
  },
];

const Donor = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-10 uppercase">
        NHÀ TÀI TRỢ CHƯƠNG TRÌNH
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
        {donors.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-60 rounded-lg overflow-hidden shadow-md">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-semibold text-gray-800 text-lg">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donor;
