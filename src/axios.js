import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'http://locahost:3005'
    }
)

export default instance;