import React from 'react'

interface Props {
    params: { id: number, postId: number }
}

const PostDetailPage = ({params: {id, postId}}: Props) => {
  return (
    <div>
      Users/{id}/Post detail {postId}
    </div>
  )
}

export default PostDetailPage
