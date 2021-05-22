// Dependencies
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Page
export default function Auth() {

  // TODO: Unmock this to your auth schema
  const signed = true

  // Hooks
  const router = useHistory()

  // OnMount
  useEffect(() => {
    if (signed) router.push('/')
  }, [signed, router])

  // JSX
  return (
    <div>
      <p>Auth page</p>
    </div>
  )
}