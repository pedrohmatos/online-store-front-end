import axios from "axios";

const instanceAxiosRequest = axios.create(
    {
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            "Content-Type": "application/json"
        }
    }
);

export default instanceAxiosRequest;