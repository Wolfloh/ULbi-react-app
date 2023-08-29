import React from "react";
import Post from "./Post";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Loader } from "./UI/Loader/Loader";
import { ComponentError } from "./UI/ComponentError/ComponentError";

export const PostItems = ({ posts, title, remove, isPostsLoading, error }) => {

    if (error) {
        return (
            <>
                <h1 className="posts-title">
                    {title}
                </h1>
                <ComponentError />
            </>
        )

    }

    return (
        <div>
            <h1 className="posts-title">
                {title}
            </h1>
            {
                <TransitionGroup>
                    {posts.map((i) =>
                        <CSSTransition
                            key={i.id}
                            timeout={400}
                            classNames='post'
                        >
                            <Post remove={remove} post={i} />
                        </CSSTransition>)}
                </TransitionGroup>
            }
            {isPostsLoading &&
                <Loader />
            }
            {!posts.length && !isPostsLoading
                ?
                <div style={{
                    textAlign: 'center',
                    margin: '50px',
                    fontSize: '25px',
                }}>
                    Посты не найдены
                </div>
                :
                void 0
            }
        </div>
    )
}

