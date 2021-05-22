// Dependencies
import PropTypes from 'prop-types'

// Components
import InputMask from 'antd-masked-input'
import FormItem from 'antd/lib/form/FormItem'

// Component
export default function MaskedInput({ invalid, label, mask, required, error, disabled, ...rest }) {

  // JSX
  return (
    <FormItem
      label={label}
      hasFeedback={invalid}
      required={required}
      help={invalid && error ? error : undefined}
      validateStatus={invalid ? 'error' : 'success'}
    >
      <InputMask mask={mask} disabled={disabled} {...rest} />
    </FormItem>
  )
}

// Prop Types
MaskedInput.propTypes = {
  invalid: PropTypes.bool,
  label: PropTypes.string,
  mask: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

MaskedInput.defaultProps = {
  invalid: false,
  label: '',
  mask: null,
  required: false,
  error: '',
  disabled: false
}