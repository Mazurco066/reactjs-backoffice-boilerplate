// Dependencies
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from 'router'

// Component
export default function App() {
  return (
    <Router>
      <Routes />
      <ToastContainer position="bottom-right" />
    </Router>
  )
}
