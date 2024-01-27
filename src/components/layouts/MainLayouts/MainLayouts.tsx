import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Content, Footer} from 'antd/es/layout/layout';
import Sidebar from '../Sidebar/Sidebar';


const MainLayouts = () => {
  return (
    <Layout >
      <Sidebar />
      <Layout className="h-full">
        <Content  className="font-poppins h-full bg-white" style={{ margin: ""  }}>
          <div
            style={{
           

            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Garden Glance ©{new Date().getFullYear()} Created by Furqan Ahmad
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayouts;