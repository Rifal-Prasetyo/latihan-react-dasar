import React, { Component, Fragment } from "react";
import Post from "../../components/Post/Post";
class BlogSpot extends Component {
    render() {
        return (
            <Fragment>
                <h1>Blog Spot</h1>
                <Post />
            </Fragment>
        )
    }
}

export default BlogSpot;