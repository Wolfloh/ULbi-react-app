
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { BackAside } from '../components/UI/BackAside/BackAside'
import { Comment } from '../components/UI/Comment/Comment'
import { ComponentError } from '../components/UI/ComponentError/ComponentError'
import { Loader } from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'
import '../styles/App.scss'




export const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [getPost, isLoading, error] = useFetching(async () => {
    const response = await PostService.getOne(id);
    setPost(response.data)
  })
  const [getComments, areCommentsLoading, commentsError] = useFetching(async () => {
    const response = await PostService.getComments(id);
    setComments(response.data)
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  useEffect(() => {
    getPost()
    getComments()
  }, [id])


  return (
    <>
      <BackAside />
      {error
        &&
        <ComponentError />
      }
      {!error
        &&
        (isLoading
          ?
          <Loader />
          :
          <div className='post-wrapper'>
            <div className='post-shell'>
              <strong className='post-title'>{post.id} {post.title}</strong>
              <p className='post-body'>{post.body}</p>
            </div>
          </div>
        )
      }

      {!commentsError
        &&
        (areCommentsLoading
          ?
          <Loader />
          :
          (comments.length
            ?
            <>
              <h2 className='post-comments'>
                Коментарии
              </h2>
              {comments.map((comment, index) =>
                <Comment key={comment.id} comment={comment} index={index} />)}
            </>
            :
            (!error
              &&
              <h3 className='post-comments'>
                Нет комментариев
              </h3>
            )
          )
        )
      }
      {commentsError
        &&
        <ComponentError />
      }
    </>
  )
}
