import { ReactNode } from "react";

export interface IPathRoutes {
  name?: string;
  path: string;
  element: JSX.Element;
}

export interface IRoutePath {
  name: string;
  path?: string;
  element?: JSX.Element;
  children?: IPathRoutes[];
}

interface ISidebarItem {
  key?: string;
  label?: ReactNode;
}

export interface IUserSidebarRoutes {
  key?: string;
  label?: ReactNode;
  children?: ISidebarItem[];
}
