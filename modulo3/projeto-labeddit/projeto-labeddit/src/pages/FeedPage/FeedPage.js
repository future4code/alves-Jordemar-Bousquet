import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'
import PostCard from '../../components/PostCards/PostCard'
import {BASE_URL} from '../../constants/urls'
import {useRequestData} from '../../hooks/useRequestData'
import {FeedContainer} from './styled'

function FeedPage() {
  useProtectedPage()
  const post = useRequestData([],`${BASE_URL}/posts`)
  console.log(post)

  const ListPost = post.map((posts) =>{
    return(
      <PostCard
        key={posts.id}
        title ={posts.title}
        body ={posts.body}
        user ={posts.username}
      />
    )

  })

  return (
    <FeedContainer>
      {ListPost}
    </FeedContainer>
  )
}

export default FeedPage