import { useEffect, useRef } from 'react';

export const useObserver = (ref, callback, canLoad, isLoading, postsLength) => {
    const observer = useRef();
    useEffect(() => {

        if (isLoading) return;
        if (observer.current) observer.current.disconnect()
        const extendPosts = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(extendPosts);
        if (postsLength) {
            observer.current.observe(ref);
        }
    }, [isLoading])
}