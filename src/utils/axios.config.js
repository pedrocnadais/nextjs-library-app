import axios from 'axios';
export var client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});
