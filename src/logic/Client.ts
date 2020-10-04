import axios from "axios";

const http = axios.create({
//    baseURL: "https://vansu.spilikin.dev/api/v1",
    baseURL: "/api/v1",
    headers: {
        "X-Header": "vansu-vue 0.1.0"
    }
});

export default class APIClient {
    info() {
        return http.get(`/info`);
    }
}