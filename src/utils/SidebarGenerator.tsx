import { NavLink } from "react-router-dom";
import {
  IUserSidebarRoutes,
  IRoutePath,
} from "../interface/sidebar.interface";

export const sidebarGenerator = (items: IRoutePath[]) => {
  const navLinkPaths = items.reduce((acc: IUserSidebarRoutes[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children && item.name) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name, // Use an empty string or provide a default value
          label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return navLinkPaths;
};
