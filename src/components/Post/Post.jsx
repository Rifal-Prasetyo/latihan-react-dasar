import React from "react";
import './Post.css'
const Post = (props) => {
    return (
        <div className="blog-spot-card">
            <h1 onClick={() => props.goDetail(props.data.id)} style={{cursor: 'pointer'}}>{props.data.title}</h1>
            <p>{props.data.body}</p>
            <button onClick={() => props.update(props.data)}>Update</button>
            <button onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>
    )
}

Post.defaultProps = {
    title: 'tidak ada judul',
    desc: 'tidak ada deskripsi'
}
export default Post;