import React from 'react'
import '../styles/App.css'

export const About = () => {
  return (
    <div className='post__wrapper'>
      <strong className='post__title'>{post.id} {post.title}</strong>
      <p className='post__body'>{post.body}</p>
    </div>
  )

}
