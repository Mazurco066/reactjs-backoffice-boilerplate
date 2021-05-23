// Dependencies
import PropTypes from 'prop-types'
import { createElement, useState } from 'react'
import { SidebarItems } from 'utils'
import { useHistory } from 'react-router-dom'

// Components
import { CloseOutlined, MenuOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Drawer, Layout, Menu } from 'antd'

// Destruct Antd
const { Header, Sider, Content } = Layout
const { Item, SubMenu } = Menu

// Layout
export default function DefaultLayout({ children }) {

  // Hooks
  const router = useHistory()
  const [ collapsed, setCollapsed ] = useState(false)
  const [ isDrawerOpen, setDrawerOpenState ] = useState(false)

  // Menu Renderer
  const renderMenu = () => (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      { 
        SidebarItems.map(({ text, icon, children, key, path }) => children.length > 0 ? (
          <SubMenu key={key} icon={icon} title={text}>
            {
              children.map(({ text: subTitle, icon: subIcon, key: subKey, path: subPath }) => (
                <Item
                className={router.location.pathname === subPath ? 'ant-menu-item-selected' : 'not-selected'}
                  onClick={() => router.push(subPath)}
                  key={subKey}
                  icon={subIcon ? subIcon : null}
                >
                  {subTitle}
                </Item>
              ))
            }
          </SubMenu>
        ) : (
          <Item
            key={key}
            icon={icon ? icon : null}
            className={router.location.pathname === path ? 'ant-menu-item-selected' : 'not-selected'}
            onClick={() => router.push(path)}
          >
            {text}
          </Item>
        ))
      }
    </Menu>
  )

  // Actions
  const toggleSidebar = () => setCollapsed(!collapsed)
  const toggleDrawer = () => setDrawerOpenState(!isDrawerOpen)
  
  // JSX
  return (
    <Layout id="backoffice-layout">
      <Sider
        collapsed={collapsed}
        trigger={null}
        collapsible
      >
        <div className="logo" />
        { renderMenu() }
      </Sider>
      <Drawer
        title="Backoffice Boilerplate"
        placement="right"
        closable={true}
        onClose={() => setDrawerOpenState(false)}
        visible={isDrawerOpen}
        getContainer={false}
        style={{ position: 'fixed' }}
      >
        { renderMenu() }
      </Drawer>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleSidebar,
          })}
          {createElement(isDrawerOpen ? CloseOutlined : MenuOutlined, {
            className: 'trigger-mobile',
            onClick: toggleDrawer,
          })}
          <h3 className="app-title">
            Backoffice Boilerplate
          </h3>
        </Header>
        <Content
          className="site-layout-background main-content"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

// Prop Types
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}