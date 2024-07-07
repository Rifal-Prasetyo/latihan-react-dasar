import React, { Component, Fragment } from "react";
import Post from "../../components/Post/Post";
import axios from "axios";
class BlogSpot extends Component {

    state = {
        posts: []
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             posts: data
        //         });
        //     })
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data
                });
            })

    }
    render() {
        return (
            <Fragment>
                <h1>Blog Spot</h1>
                {
                    this.state.posts.map(post => {
                        return (

                            <Post key={post.id} title={post.title} desc={post.body} />
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default BlogSpot;