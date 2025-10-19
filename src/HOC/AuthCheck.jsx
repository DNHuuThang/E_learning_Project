import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AuthCheck({ children, requireAdmin = false }) {
  const navigate = useNavigate();


  const { infoUser } = useSelector((state) => state.userSlice);

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

  return children;
}