import React from 'react'
import st from './Comment.module.css'


export const Comment = ({ comment, index }) => {
  return (
    <div className={st.wrapper}>
      <strong className={st.title}>{index + 1} {comment.name}</strong>
      <p className={st.body}>{comment.body}</p>
    </div>
  )
}
