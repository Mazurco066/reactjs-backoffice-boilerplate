// Dependencies
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Components
import { Input, PasswordInput } from 'components'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Row, Col, Form, Button } from 'antd'

// Validation schema
const authSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must contains at least 8 characters')
})

// Page
export default function Auth() {

  // TODO: Unmock this to your auth schema
  const signed = false

  // Hooks
  const router = useHistory()
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: authSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      console.log('[SUBMIT] Values', values)
      setSubmitting(false)
    }
  })

  // OnMount
  useEffect(() => {
    if (signed) router.push('/')
  }, [signed, router])

  // JSX
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h3>Restrict access</h3>
          <p>Fill the form below with your credential to proceed.</p>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form layout="vertical" onFinish={formik.handleSubmit}>
            <Input
              name="username"
              placeholder="Username"
              label="Username"
              prefix={<UserOutlined />}
              required
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              invalid={formik.touched.username && formik.errors.username ? true : false}
              error={formik.errors.username}
            />
            <PasswordInput
              name="password"
              placeholder="Password"
              label="Password"
              prefix={<KeyOutlined />}
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              invalid={formik.touched.password && formik.errors.password ? true : false}
              error={formik.errors.password}
            />
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}