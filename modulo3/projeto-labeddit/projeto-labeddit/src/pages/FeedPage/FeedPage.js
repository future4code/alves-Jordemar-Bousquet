import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'

function FeedPage() {
  useProtectedPage()

  return (
    <div>FeedPage</div>
  )
}

export default FeedPage