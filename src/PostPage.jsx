import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='postPage'>
        <article className='post'></article>
        {post && 
          <>
            <h2>{post.title}</h2>
          </>
        }
    </main>
  )
}

export default PostPage