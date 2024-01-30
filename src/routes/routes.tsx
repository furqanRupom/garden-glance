import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/RoutesGenerator";
import { UserSidebarPaths } from "./user.routes";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import { UserProtectedRoute } from "../private/UserProtectedRoute";
import CreateVariant from "../pages/Flowers/management/CreateVariant";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProtectedRoute>
        <App />
      </UserProtectedRoute>
    ),
    children: routesGenerator(UserSidebarPaths),
  },
  {
    path: "/",
    element: (
      <UserProtectedRoute>
        <App />
      </UserProtectedRoute>
    ),
    children: [
      {
        path: "/create-variant",
        element: <CreateVariant />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
