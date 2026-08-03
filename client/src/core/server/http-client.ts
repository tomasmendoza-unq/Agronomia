import axios from "axios";
import setResponseMiddlewares from "./middlewares/response/response-middlewares";
import setRequestMiddlewares from "./middlewares/request/request-middlewares";

const http = axios.create({
    baseURL: 'http://localhost:8080'
});

setRequestMiddlewares(http);
setResponseMiddlewares(http);

export default http;