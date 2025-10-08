import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const { infoUser } = useSelector((state) => state.userSlice);

  // Nếu chưa đăng nhập thì chuyển hướng về /login
  if (!infoUser) {
    return <Navigate to="/login" replace />;
  }

  // Nếu có đăng nhập thì cho hiển thị trang con
  return <>{children}</>;
};

export default AuthCheck;
