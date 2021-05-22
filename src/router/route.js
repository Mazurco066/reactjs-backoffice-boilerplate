// Dependencies
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

// Available layouts
import { DefaultLayout, AuthLayout } from 'pages/_layouts'

// Wrapper
export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  // TODO: Unmock this config
  const signed = true

  // Return to auth if not signed
  if (!signed && isPrivate) {
    return <Redirect to="/auth" />
  }

  // Current layout
  const Layout = signed ? DefaultLayout : AuthLayout

  // JSX
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

// Prop
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false
}