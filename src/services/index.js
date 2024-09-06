import Get from "./Get";
import Post from "./Post";


// API
const postNewsBlog = (data) => Post('posts', false, data );

// GET
const getNewsBlog = () => Get('posts?_sort=id,-views', false);
const getComments = () => Get('comments', true);

const API = {
    postNewsBlog,
    getNewsBlog,
    getComments
}

export default API;