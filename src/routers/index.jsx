import { Route } from "react-router-dom";
import HomePage from "../pages/home";
import KhoaHocDetail from "../pages/learning-detail";
import HomeTemplate from "../templates/HomeTemplate";
import AuthTemplate from "../templates/AuthTemplate";
import LoginPage from "../pages/login";

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
