// Dependencies
import PropTypes from 'prop-types'

// Layout
export default function AuthLayout({ children }) {
  
  // JSX
  return (
    <div>
      {children}
    </div>
  )
}

// Prop Types
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
}