// Dependencies
import PropTypes from 'prop-types'

// Components
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import FormItem from 'antd/lib/form/FormItem'
import { Input as AntdInput } from 'antd'

// Component
export default function PasswordInput({ invalid, label, mask, required, error, disabled, ...rest }) {

  // JSX
  return (
    <FormItem
      label={label}
      hasFeedback={invalid}
      required={required}
      help={invalid && error ? error : undefined}
      validateStatus={invalid ? 'error' : 'success'}
    >
      <AntdInput.Password
        {...rest}
        disabled={disabled}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </FormItem>
  )
}

// Prop Types
PasswordInput.propTypes = {
  invalid: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

PasswordInput.defaultProps = {
  invalid: false,
  label: '',
  required: false,
  error: '',
  disabled: false
}