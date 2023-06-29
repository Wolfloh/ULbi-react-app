import React from "react";
import Post from "./Post";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Loader } from "./UI/Loader/Loader";

const Postitem = ({ posts, title, remove, isPostsLoading }) => {

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                margin: '50px',
            }}>
                {title}
            </h1>
            {
                <TransitionGroup>
                    {posts.map((i, index) =>
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

export default Postitem;