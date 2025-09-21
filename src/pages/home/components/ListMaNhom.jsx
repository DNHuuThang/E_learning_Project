// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { khoahocService } from "../../../service/khoahocService";

// import { Card } from "antd";
// import { setListMaNhom } from "../../../stores/manhom";

// const ListMaNhom = () => {
//   const dispatch = useDispatch();
//   const listMaNhom = useSelector((state) => state.manhomSlice.listMaNhom);
//   console.log("listMaNhom", listMaNhom);
//   const fetchListMaNhom = async () => {
//     try {
//       const nhomList = await khoahocService.getListNhom();
//       dispatch(setListMaNhom(nhomList));
//     } catch (error) {
//       console.log("errorListMaNhom", error);
//     }
//   };

//   useEffect(() => {
//     fetchListMaNhom();
//   }, []);

//   return (
//     <div>
//       <div className="max-w-4xl mx-auto px-4 py-10">
//         <h2 className="text-xl md:text-2xl font-bold mb-8">
//           Danh sách Mã Nhóm
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {listMaNhom.map((nhom) => (
//             <Card
//               key={nhom}
//               hoverable
//               className="rounded-xl shadow text-center bg-gradient-to-r from-teal-100 to-teal-50"
//             >
//               <h3 className="text-lg font-semibold text-teal-700">{nhom}</h3>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListMaNhom;
