// Dependencies
import PropTypes from 'prop-types'
import { createElement, useState } from 'react'
import { SidebarItems } from 'utils'
import { useHistory } from 'react-router-dom'

// Components
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

// Destruct Antd
const { Header, Sider, Content } = Layout
const { Item, SubMenu } = Menu

// Layout
export default function DefaultLayout({ children }) {

  // Hooks
  const router = useHistory()
  const [ collapsed, setCollapsed ] = useState(false)

  // Actions
  const toggleSidebar = () => setCollapsed(!collapsed)
  
  // JSX
  return (
    <Layout id="backoffice-layout">
      <Sider
        collapsed={collapsed}
        trigger={null}
        collapsible
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          { 
            SidebarItems.map(({ text, icon, children, key, path }) => children.length > 0 ? (
              <SubMenu key={key} icon={icon} title={text}>
                {
                  children.map(({ text: subTitle, icon: subIcon, key: subKey, path: subPath }) => (
                    <Item
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
                onClick={() => router.push(path)}
              >
                {text}
              </Item>
            ))
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleSidebar,
          })}
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