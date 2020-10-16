import axios from "axios"

const instance = axios.create({
    baseURL : "https://tiktok-123.herokuapp.com/v2/posts"
})

// https://tiktok-123.herokuapp.com/v2/posts
export default instance;