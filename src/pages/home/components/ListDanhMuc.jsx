import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { khoahocService } from "../../../service/khoahocService";
import { setListDanhMuc } from "../../../stores/danhmuc";

const ListDanhMuc = () => {
  const dispatch = useDispatch();

  const listDanhMuc = useSelector((state) => state.danhmucSlice.listDanhMuc);
  console.log("listDanhMuc", listDanhMuc);

  const fetchListDanhMuc = async () => {
    try {
      const responseListDanhMuc = await khoahocService.getDanhMucKhoaHoc();
      dispatch(setListDanhMuc(responseListDanhMuc.data));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchListDanhMuc();
  }, []);
  return <div>ListDanhMuc</div>;
};

export default ListDanhMuc;
