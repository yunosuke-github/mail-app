import React, {useState} from 'react';
import {
  LaptopOutlined,
  MailOutlined,
  NotificationOutlined,
  SendOutlined,
  StarOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const menuItems = [
  getItem('受信トレイ', 'receiving-tray', <MailOutlined />, null, ''),
  getItem('スター付き', 'starred', <StarOutlined />, null, ''),
  getItem('送信済み', 'sent', <SendOutlined />, null, ''),
  getItem('ラベル', 'labels', null, [], 'group'),
]
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{
          color: '#FFFFFF',
          fontSize: 24
        }}>Mail App</div>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['receiving-tray']}
            defaultOpenKeys={['receiving-tray']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={menuItems}
          />
        </Sider>
        <Layout
          style={{
            padding: '24px 24px 24px',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;