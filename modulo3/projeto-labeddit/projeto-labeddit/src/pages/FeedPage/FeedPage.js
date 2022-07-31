import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'
import PostCard from '../../components/PostCards/PostCard'
import {BASE_URL} from '../../constants/urls'
import {useRequestData} from '../../hooks/useRequestData'
import FeedForm from './FeedForm'
import {FeedContainer} from './styled'
import Loading from '../../components/Loading/Loading'

function FeedPage() {
  useProtectedPage()
  const post = useRequestData([],`${BASE_URL}/posts`)

  console.log(post)

  const ListPost = post.map((posts) =>{
    return(
      <PostCard
        key={posts.id}
        id = {posts.id}
        title ={posts.title}
        body ={posts.body}
        username ={posts.username}
        commentCount ={posts.commentCount}
        voteSum = {posts.voteSum}
      />
    )

  })

  return (
    <div>
    <FeedForm/>
    <FeedContainer>
      {post? ListPost : <Loading/>}
    </FeedContainer>
    </div>
  )
}

export default FeedPage