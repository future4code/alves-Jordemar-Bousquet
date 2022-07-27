import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'

function PostPage() {
  useProtectedPage()

  return (
    <div>PostPage</div>
  )
}

export default PostPage