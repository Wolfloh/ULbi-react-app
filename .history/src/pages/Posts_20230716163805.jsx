import React, { useRef, useState } from "react";
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
import { PostItems } from "../components/PostItems";
import { NumberOfPosts } from '../components/NumberOfPosts'
import { SetEndlessPosts } from '../components/UI/SetEndlessPosts/SetEndlessPosts'


export function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [observe, setObserve] = useState(true);
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
        posts.length,
        observe
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
            <SetEndlessPosts />
            <NumberOfPosts limit={limit} setLimit={setLimit} />
            {postError &&
                <h1>Произошла Ошибка ${postError}</h1>
            }
            <PostItems isPostsLoading={isPostsLoading} remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
            <div ref={lastElement} />
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />

        </div>
    );
}


