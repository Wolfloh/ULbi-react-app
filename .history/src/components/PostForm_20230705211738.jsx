import React, { useState } from 'react'
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';



export const PostForm = ({ posts, setPosts, setModal }) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
    });
    function addNewPost(e) {
        e.preventDefault();
        setPosts([...posts, { ...post, id: Date.now() }])
        setPost({
            title: '',
            body: '',
        })
        setModal(false)
    }
    return (
        <form>
            <MyInput name={post.title} value={post.title} onInput={e => setPost({ ...post, title: e.target.value })} placeholder="Название поста" />
            <MyInput name={post.body} value={post.body} onInput={e => setPost({ ...post, body: e.target.value })} placeholder="Описание поста" />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}
