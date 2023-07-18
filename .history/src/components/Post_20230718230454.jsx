import React from "react";
import { Link } from "react-router-dom";


function Post(props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns-wrapper">
                <Link className="post__btns" to={`/${props.post.id}`}>открыть</Link>
                <div className="post__btns delete__btn">
                    <button onClick={() => props.remove(props.post)}>удалить</button>
                </div>
            </div>
        </div>
    )
}

export default Post;