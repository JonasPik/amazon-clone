import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-44d6c.cloudfunctions.net/api' // API (cloud function) URL
    // 'http://localhost:5001/clone-44d6c/us-central1/api'
})

export default instance;
