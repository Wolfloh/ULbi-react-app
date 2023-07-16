import React, { useRef, useState } from "react";
import PostItems from "../components/PostItems";
import { MyButton } from "../components/UI/button/MyButton";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter";
import { MyModal } from "../components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePosts";
import { useEffect } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";
import '../styles/App.css'
import { useObserver } from "../hooks/useObserver";
import { MySelect } from "../components/UI/select/MySelect";

export function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    });

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }



    useObserver(
        lastElement.current,
        () => setPage(page + 1),
        page < totalPages,
        isPostsLoading,
        posts.length
    );


    useEffect(() => {
        fetchPosts();
    }, [page, limit])

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Создать Пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm posts={posts} setPosts={setPosts} setModal={setModal} />
            </MyModal>
            <hr style={{
                height: '1px',
                backgroundColor: 'black',
                margin: '25px 0',
            }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                options={
                    [
                        { value: 5, name: 5 },
                        { value: 10, name: 10 },
                        { value: 15, name: 15 },
                        { value: 20, name: 20 },
                        { value: 25, name: 25 },
                        { value: -1, name: 'все' }
                    ]}
                defaultValue='количество постов'
                value={limit}
                onChange={value => setLimit(value)}

            />
            {postError &&
                <h1>Произошла Ошибка ${postError}</h1>
            }
            <PostItems isPostsLoading={isPostsLoading} remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
            <div ref={lastElement} />
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />

        </div>
    );
}


