// Dependencies
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Components
import { Input, MaskedInput } from 'components'
import { UserOutlined, CreditCardOutlined, CalendarOutlined, KeyOutlined } from '@ant-design/icons'
import { Button, Form, Row, Col } from 'antd'

// Validation schema
const exampleSchema = Yup.object().shape({
  number: Yup.string().required('Card number is required'),
  expiry: Yup.string().required('Card expiry is required'),
  cvv: Yup.string().required('Card CVV is required'),
  holder: Yup.string().required('Card holder is required')
})

// Page
export default function Forms() {

  // Hooks
  const formik = useFormik({
    initialValues: { number: '', expiry: '', cvv: '', holder: '' },
    validationSchema: exampleSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      console.log('[SUBMIT] Values', values)
      setSubmitting(false)
    }
  })

  // JSX
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h3>Forms</h3>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form layout="vertical" onFinish={formik.handleSubmit}>
            <Input
              name="holder"
              placeholder="Card Holder"
              label="Card Holder"
              prefix={<UserOutlined />}
              required
              value={formik.values.holder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              invalid={formik.touched.holder && formik.errors.holder ? true : false}
              error={formik.errors.holder}
            />
            <MaskedInput
              name="number"
              label="Card Number"
              placeholder="Card Number"
              mask="1111 1111 1111 1111"
              prefix={<CreditCardOutlined />}
              required
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              invalid={formik.touched.number && formik.errors.number ? true : false}
              error={formik.errors.number}
            />
            <MaskedInput
              name="expiry"
              label="Card Expiry"
              placeholder="Card Expiry"
              mask="11/11"
              prefix={<CalendarOutlined />}
              required
              value={formik.values.expiry}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              invalid={formik.touched.expiry && formik.errors.expiry ? true : false}
              error={formik.errors.expiry}
            />
            <MaskedInput
              name="cvv"
              label="Card CVV"
              placeholder="Card CVV"
              mask="111"
              prefix={<KeyOutlined />}
              required
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              invalid={formik.touched.cvv && formik.errors.cvv ? true : false}
              error={formik.errors.cvv}
            />
            <Button type="primary" htmlType="submit">
              Submit Data
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}