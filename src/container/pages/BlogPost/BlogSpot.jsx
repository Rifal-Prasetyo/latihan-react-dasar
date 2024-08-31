import React, { Component, Fragment } from "react";
import Post from "../../../components/Post/Post";
import axios from "axios";
import './BlogSpot.css';
import { NavigateContext } from "../../../container/pages/BlogPost/NavigateContext";
class BlogSpot extends Component {

   
    state = {
        posts: [], 
        formAddPost: {
            id: '1',
            title: '',
            body: ''
        },
        isUpdate: false
    }
    static contextType = NavigateContext;
    getPosts = () => {
        axios.get('http://localhost:3004/posts?_sort=id,-views')
        .then(res => {
            this.setState({
                posts: res.data
            });
        })
    }
    handleRemovePost = (id) => {
        axios.delete(`http://localhost:3004/posts/${id}`).then(res => {
            this.getPosts();
        })
    }

    postDataAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formAddPost).then(res => {
            console.log(res)
            this.getPosts();
            this.setState({
                formAddPost: {
                    id: '1',
                    title: '',
                    body: ''
                },
            })
        })
    }

    putDataApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formAddPost.id}`, this.state.formAddPost).then(res => {
            console.log(res);
            this.getPosts();
            this.setState({
                isUpdate: false,
                formAddPost: {
                    id: '1',
                    title: '',
                    body: ''
                },
            })
        })
    }

    handleFormNewPostChange = (e) => {
        // get cloning form state formAddPost
        const formAddPostNew = {...this.state.formAddPost};
        // set new value
        //set id using timestamp 
        if(!this.state.isUpdate) {
            formAddPostNew['id'] = new Date().getTime().toString();
        }
        formAddPostNew[e.target.name] = e.target.value;
        this.setState({
            formAddPost: formAddPostNew
        });
    }

    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.putDataApi();
        } else {
            this.postDataAPI();
        }
    }

    handleUpdate = (data) => {
        this.setState({
            formAddPost: data,
            isUpdate: true
        });
        // axios.put(`http://localhost:3004/posts/${data.id}`, this.state.formAddPost).then(res => {
            
        // })
    }

    handleDetail = (id) => {
        this.context(`/detail/${id}`);
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             posts: data
        //         });
        //     })
       this.getPosts();

    }
    render() {
        return (
            <Fragment>
                <h1>Blog Spot</h1>
                <div className="create-new-post">
                    <label htmlFor="title">Judul</label>
                    <input type="text" name="title" value={this.state.formAddPost.title} id="title" placeholder="masukkan judul" onChange={this.handleFormNewPostChange} />
                    <label htmlFor="body">Content Body</label>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.formAddPost.body} onChange={this.handleFormNewPostChange}></textarea>
                    <button onClick={this.handleSubmit} >Add</button>
                </div>
                {
                    this.state.posts.map(post => {
                        return (

                            <Post key={post.id} data={post}  remove={this.handleRemovePost} update={this.handleUpdate} goDetail = {this.handleDetail}/>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default BlogSpot;