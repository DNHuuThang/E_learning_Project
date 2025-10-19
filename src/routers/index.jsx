import { Route } from "react-router-dom";
import HomePage from "../pages/home";
import KhoaHocDetail from "../pages/learning-detail";
import HomeTemplate from "../templates/HomeTemplate";
import AuthTemplate from "../templates/AuthTemplate";
import LoginPage from "../pages/login";
import AdminTemplate from "../templates/AdminTemplate";
import UserManagementPage from "../pages/admin/UserManagementPage";
import CourseManagementPage from "../pages/admin/CourseManagementPage";
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
        element: <KhoaHocDetail />,
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
  {
    path: "/admin",
    element: (
      <AuthCheck requireAdmin>
        <AdminTemplate />
      </AuthCheck>
    ),
    child: [
      { index: true, element: <div>Trang chủ admin</div> },
      { path: "quanlynguoidung", element: <UserManagementPage /> },
      { path: "quanlykhoahoc", element: <CourseManagementPage /> },
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
