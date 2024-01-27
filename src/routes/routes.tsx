import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import { routesGenerator } from "../utils/RoutesGenerator"
import { UserSidebarPaths } from "./user.routes"
import Login from "../pages/Login/Login"
import Register from "../pages/Login/Register"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:routesGenerator(UserSidebarPaths)
  },{
    path:"/login",
    element:<Login />
  },
  {
    path:"/register",
    element:<Register />
  }
])

export default router;