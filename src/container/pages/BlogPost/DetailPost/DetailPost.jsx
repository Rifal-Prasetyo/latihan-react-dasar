import React, {Component, Fragment} from "react";
import { withRouter } from "../withRouter";
import axios from "axios";
class DetailPostId extends Component  {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        // console.log(this.props);
        // berbeda dengan yang ada di video karena ini menggunakan React Router V6 jadi membutuhkan konfigurasi tambahan
        axios.get('http://localhost:3004/posts/' + this.props.router.params.id)
        .then(res => {
            console.log('data', res.data);
            const post = res.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }
    render() {
        // console.log(this.props);
        return (
            <Fragment>
        <h1>Detail Post</h1>
        <div>
            <h2>Judul: {this.state.post.title}</h2>
            <p> Deskripsi: {this.state.post.body}</p>
        </div>
        </Fragment>
        )
    }
}
export default withRouter(DetailPostId);

