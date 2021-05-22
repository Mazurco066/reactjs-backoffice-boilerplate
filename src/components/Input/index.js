// Dependencies
import PropTypes from 'prop-types'

// Components
import FormItem from 'antd/lib/form/FormItem'
import { Input as AntdInput } from 'antd'

// Component
export default function Input({ invalid, label, mask, required, error, disabled, ...rest }) {

  // JSX
  return (
    <FormItem
      label={label}
      hasFeedback={invalid}
      required={required}
      help={invalid && error ? error : undefined}
      validateStatus={invalid ? 'error' : 'success'}
    >
      <AntdInput disabled={disabled} {...rest} />
    </FormItem>
  )
}

// Prop Types
Input.propTypes = {
  invalid: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

Input.defaultProps = {
  invalid: false,
  label: '',
  required: false,
  error: '',
  disabled: false
}