
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { Comment } from '../components/UI/Comment/Comment'
import { Loader } from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'
import '../styles/App.css'




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
      {error
        &&
        <h3
          style={{
            fontSize: '30px',
          }}>
          Произошла ошибка
        </h3>
      }
      {!error
        &&
        (isLoading
          ?
          <div style={{
            margin: '220px 0 0 0'
          }}>
            <Loader className='post__loader' />
          </div>
          :
          <div className='post__wrapper'>
            <strong className='post__title'>{post.id} {post.title}</strong>
            <p className='post__body'>{post.body}</p>
          </div>)
      }

      {!commentsError
        &&
        (areCommentsLoading
          ?
          <div style={{
            margin: '300px 0 0 0'
          }}>
            <Loader className='post__loader' />
          </div>
          :
          (comments.length
            ?
            <>
              <h2 style={{
                textAlign: 'center',
                fontSize: '21px'
              }}>Коментарии
              </h2>
              {comments.map((comment, index) =>
                <Comment key={comment.id} comment={comment} index={index} />)}
            </>
            :
            <h3
              style={{
                fontSize: '30px',
              }}>
              Нет комментариев
            </h3>
          )
        )
      }
      {commentsError
        &&
        <h3
          style={{
            fontSize: '30px',
          }}>
          Произошла ошибка
        </h3>
      }



    </>
  )
}
