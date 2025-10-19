import { Layout, Menu, Avatar, Dropdown } from "antd";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  BookOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "../stores/user";                     // ✅ NEW
import { localStorageUtil, keyLocalStorage } from "../components/util/localStorage"; // ✅ NEW

const { Header, Sider, Content } = Layout;

export default function AdminTemplate() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();                                // ✅ NEW

  const handleLogout = () => {
    // ✅ Xóa token & infoUser theo util chuẩn của dự án + dọn Redux
    localStorageUtil.remove(keyLocalStorage.TOKEN);
    localStorageUtil.remove(keyLocalStorage.INFO_USER);
    dispatch(setLogout());
    navigate("/");
  };

  const goHome = () => navigate("/");                            // ✅ NEW

  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <span onClick={goHome}>Về trang chủ</span>,         // ✅ NEW
    },
    {
      key: "users",
      icon: <UserOutlined />,
      label: <Link to="/admin/quanlynguoidung">Quản lý người dùng</Link>,
    },
    {
      key: "courses",
      icon: <BookOutlined />,
      label: <Link to="/admin/quanlykhoahoc">Quản lý khóa học</Link>,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: <span onClick={handleLogout}>Đăng xuất</span>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 64,
            margin: 16,
            background: "rgba(255,255,255,.2)",
          }}
        />
        <Menu theme="dark" mode="inline" items={menuItems} />
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <Dropdown
            menu={{
              items: [
                { key: "home", label: "Về trang chủ", onClick: goHome },  // ✅ NEW
                { key: "logout", label: "Đăng xuất", onClick: handleLogout },
              ],
            }}
          >
            <span style={{ cursor: "pointer" }}>
              <Avatar src="https://i.pravatar.cc/40" /> Chào admin
            </span>
          </Dropdown>
        </Header>

        <Content style={{ margin: "16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
