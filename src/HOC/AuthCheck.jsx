import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

export default function AuthCheck({ children, requireAdmin = false }) {
  const navigate = useNavigate();
  const { infoUser } = useSelector((state) => state.userSlice);

  // Nếu chưa đăng nhập thì chuyển hướng về login
  useEffect(() => {
    if (!infoUser) {
      navigate("/login");
      return;
    }

    // Nếu yêu cầu quyền Admin nhưng user không phải admin
    if (requireAdmin && infoUser?.maLoaiNguoiDung !== "GV") {
      navigate("/");
    }
  }, [navigate, infoUser, requireAdmin]);

  // Nếu có đăng nhập, hiển thị children
  return <>{children}</>;
}
