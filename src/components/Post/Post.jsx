import React from "react";
import './Post.css'
const Post = (props) => {
    return (
        <div className="blog-spot-card">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

Post.defaultProps = {
    title: 'tidak ada judul',
    desc: 'tidak ada deskripsi'
}
export default Post;