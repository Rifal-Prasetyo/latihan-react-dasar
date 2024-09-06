import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";


// API
const postNewsBlog = (data) => Post('posts', false, data );

// PUT
const updateNewsblog = (data, id) => Put(`/posts/${id}`, false, data);

// DELETE 
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);


// GET
const getNewsBlog = () => Get('posts?_sort=id,-views', false);
const getComments = () => Get('comments', true);

const API = {
    postNewsBlog,
    updateNewsblog,
    deleteNewsBlog,
    getNewsBlog,
    getComments
}

export default API;