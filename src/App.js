import React, {useState} from 'react';
import {
  CloseCircleOutlined,
  DingdingOutlined,
  DownloadOutlined,
  LaptopOutlined,
  MailOutlined,
  NotificationOutlined,
  SendOutlined,
  StarOutlined,
  UserOutlined
} from '@ant-design/icons';
import {Drawer, Form, Button, Col, Input, DatePicker, Layout, Menu, Row, Select, Space, theme, Flex, Tag} from 'antd';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import TextArea from "antd/es/input/TextArea";
const { Option } = Select;
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
  const [open, setOpen] = useState(false);
  const [toList, setToList] = useState([]);
  const [ccList, setCcList] = useState([]);
  const [bccList, setBccList] = useState([]);
  const [toAddress, setToAddress] = useState(null);
  const [ccAddress, setCcAddress] = useState(null);
  const [bccAddress, setBccAddress] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const initSendInput = () => {
    setToList([]);
    setCcList([]);
    setBccList([]);
    setTitle(null);
    setBody(null);
  }

  const onClose = () => {
    setOpen(false);
    initSendInput();
  };

  const onPressToInputEnter = () => {
    setToList([...toList, toAddress]);
    setToAddress(null);
  }

  const popToList = (index) => {
    setToList(toList.filter((t, i) => (i !== index)));
  }

  const onPressCcInputEnter = () => {
    setCcList([...ccList, ccAddress]);
    setCcAddress(null);
  }

  const popCcList = (index) => {
    setCcList(ccList.filter((t, i) => (i !== index)));
  }

  const onPressBccInputEnter = () => {
    setBccList([...bccList, bccAddress]);
    setBccAddress(null);
  }

  const popBccList = (index) => {
    setBccList(bccList.filter((t, i) => (i !== index)));
  }

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
          <Button
            type="primary"
            shape="round"
            icon={<DingdingOutlined />}
            style={{ margin: '5%', width: '90%', height: 40, }}
            onClick={() => setOpen(true)}
          >作成</Button>
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
      <Drawer
        title="メールの作成"
        width={720}
        onClose={onClose}
        open={open}
        maskClosable={false}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>キャンセル</Button>
            <Button onClick={onClose} type="primary">
              送信
            </Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Flex align={'center'} style={{ borderBottom: "solid 1px #ECEFF1", marginBottom: 10 }}>
            <Col span={2}>To</Col>
            <Col span={22}>
              <Flex align={'center'}>
                {toList.map((to, index) => {
                  return (
                    <Tag key={to} closeIcon={<CloseCircleOutlined />} onClose={() => popToList(index)}>{ to }</Tag>
                  )
                })}
                <Input
                  variant="borderless"
                  value={toAddress}
                  onChange={(e) => setToAddress(e.target.value)}
                  onPressEnter={onPressToInputEnter}
                />
              </Flex>
            </Col>
          </Flex>
          <Flex align={'center'} style={{ borderBottom: "solid 1px #ECEFF1", marginBottom: 10 }}>
            <Col span={2}>Cc</Col>
            <Col span={22}>
              <Flex align={'center'}>
                {ccList.map((cc, index) => {
                  return (
                    <Tag key={cc} closeIcon={<CloseCircleOutlined />} onClose={() => popCcList(index)}>{ cc }</Tag>
                  )
                })}
                <Input
                  variant="borderless"
                  value={ccAddress}
                  onChange={(e) => setCcAddress(e.target.value)}
                  onPressEnter={onPressCcInputEnter}
                />
              </Flex>
            </Col>
          </Flex>
          <Flex align={'center'} style={{ borderBottom: "solid 1px #ECEFF1", marginBottom: 10 }}>
            <Col span={2}>Bcc</Col>
            <Col span={22}>
              <Flex align={'center'}>
                {bccList.map((bcc, index) => {
                  return (
                    <Tag key={bcc} closeIcon={<CloseCircleOutlined />} onClose={() => popBccList(index)}>{ bcc }</Tag>
                  )
                })}
                <Input
                  variant="borderless"
                  value={bccAddress}
                  onChange={(e) => setBccAddress(e.target.value)}
                  onPressEnter={onPressBccInputEnter}
                />
              </Flex>
            </Col>
          </Flex>
          <Row style={{ borderBottom: "solid 1px #ECEFF1", marginBottom: 10 }}>
            <Input
              style={{ padding: '-100' }}
              variant="borderless"
              placeholder="件名"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Row>
          <Row>
            <TextArea
              variant="borderless"
              placeholder="本文"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              autoSize={{minRows: 10, maxRows: 30}}
            />
          </Row>
        </Form>
      </Drawer>
    </Layout>
  );
};
export default App;