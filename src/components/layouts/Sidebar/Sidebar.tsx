import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarGenerator } from "../../../utils/SidebarGenerator";
import { UserSidebarPaths } from "../../../routes/user.routes";
import { ItemType } from "antd/es/menu/hooks/useItems";

const Sidebar = () => {
  // const role = 'user';
  const sidebarItems: MenuProps["items"] = sidebarGenerator(
    UserSidebarPaths
  ) as ItemType[];

  return (
    <Sider
      className="min-h-screen "
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div>
        <h1
          className="font-poppins text-gray-400 font-semibold"
          style={{ padding: "1.1rem", fontSize: "1.3rem" }}
        >
          <span style={{ color: "black" }}>Garden</span>Glance
        </h1>
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        className="font-poppins"
        theme="light"
        mode="inline"
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
