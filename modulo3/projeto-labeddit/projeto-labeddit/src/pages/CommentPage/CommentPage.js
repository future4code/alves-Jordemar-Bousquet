import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'
import {useParams} from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import CommentCard from '../../components/CommentCard/CommentCard'
import {PostContainer} from './styled'

function CommentPage() {
  useProtectedPage()
  const params = useParams()
  const comments = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`)

  const listComments = comments && comments.map((comment) =>{
      return(
        <div key ={comment.id}>
        <CommentCard
          comment ={comment.body}
        />
        </div>
      )

  })


  return (
    <div>
    <PostContainer>
      <p>enviado por:{params.username}</p>
      <h2>{params.title}</h2>
      <p>{params.body}</p>
    </PostContainer>
    {comments.length === 0? 'Não há Comentarios para esta postagem' : listComments }
    </div>
  )
}

export default CommentPage