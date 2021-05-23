// Dependencies
import PropTypes from 'prop-types'

// Components
import { Layout } from 'antd'

// Destruct Antd
const { Header, Content, Footer } = Layout

// Layout
export default function AuthLayout({ children }) {
  
  // JSX
  return (
    <Layout id="backoffice-auth-layout">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Backoffice boilerplate ©2021 Created by <a target="_blank" rel="noreferrer" href="https://github.com/Mazurco066">
          Mazurco066
        </a>
      </Footer>
    </Layout>
  )
}

// Prop Types
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
}