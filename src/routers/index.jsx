import { Route } from "react-router-dom";
import HomePage from "../pages/home";
import KhoaHocDetail from "../pages/learning-detail";
import HomeTemplate from "../templates/HomeTemplate";
import AuthTemplate from "../templates/AuthTemplate";
import LoginPage from "../pages/login";
import DanhMucPage from "../pages/category";
import KhoaHocPhanTrangPage from "../pages/khoahocphantrang/ListKhoaHocPhanTrang";
import InfoUser from "../pages/infoUser";
import InfoKhoaHocUser from "../pages/infoUser/components/infoKhoaHocUser";
import InfoUserUpdate from "../pages/infoUser/components/infoUserUpdate";
import BlogListPage from "../pages/blog";
import EvenPage from "../pages/even";
import InfoElerningPage from "../pages/infoElerning";
import AuthCheck from "../HOC/AuthCheck";

const routers = [
  {
    path: "",
    element: <HomeTemplate />,
    child: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/detail/:khoahocId",
        element: (
          <AuthCheck>
            <KhoaHocDetail />
          </AuthCheck>
        ),
      },
      {
        path: "/danhmuckhoahoc/:danhmucId",
        element: (
          <AuthCheck>
            <DanhMucPage />
          </AuthCheck>
        ),
      },
      {
        path: "/khoahoc",
        element: (
          <AuthCheck>
            <KhoaHocPhanTrangPage />
          </AuthCheck>
        ),
      },
      {
        path: "/infoUser",
        element: (
          <AuthCheck>
            <InfoUser />
          </AuthCheck>
        ),
      },
      {
        path: "/info-khoa-hoc-user",
        element: (
          <AuthCheck>
            <InfoKhoaHocUser />
          </AuthCheck>
        ),
      },
      {
        path: "/info-update",
        element: (
          <AuthCheck>
            <InfoUserUpdate />
          </AuthCheck>
        ),
      },
      {
        path: "/blog",
        element: (
          <AuthCheck>
            <BlogListPage />
          </AuthCheck>
        ),
      },
      {
        path: "/event",
        element: (
          <AuthCheck>
            <EvenPage />
          </AuthCheck>
        ),
      },
      {
        path: "/thongtin",
        element: (
          <AuthCheck>
            <InfoElerningPage />
          </AuthCheck>
        ),
      },
    ],
  },
  {
    path: "",
    element: <AuthTemplate />,
    child: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];

export const renderRoutes = () => {
  return routers.map((template, index) => {
    return (
      <Route key={index} path={template.path} element={template.element}>
        {template.child.map((item, indexChild) => {
          return (
            <Route key={indexChild} path={item.path} element={item.element} />
          );
        })}
      </Route>
    );
  });
};
