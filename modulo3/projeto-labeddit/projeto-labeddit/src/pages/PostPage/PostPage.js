import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'
import {useParams} from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

function PostPage() {
  useProtectedPage()
  const params = useParams()
  const comments = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`)

  const listComments = comments && comments.map((comment) =>{
      return(
        <div key ={comment.id}>
        <p>{comment.body}</p>
        </div>
      )

  })


  return (
    <div>
      <h4> enviado por:{params.username}</h4>
      <h1>{params.title}</h1>
      <p>{params.body}</p>
        {listComments}
    </div>
  )
}

export default PostPage