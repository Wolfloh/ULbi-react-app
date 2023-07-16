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
                <div className="post__btns">
                    <Link to={`/${props.post.id}`}>open</Link>
                </div>
                <div className="post__btns delete-btn">
                    <button onClick={() => props.remove(props.post)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Post;