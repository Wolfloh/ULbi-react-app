import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = () => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts;
        }
    };
    console.log('useSortedPosts');

    return sortedPosts;

}


export const usePosts = (posts, sort, query) => {
    const sortedPosts = useMemo(useSortedPosts(posts, sort), [posts, sort]);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}