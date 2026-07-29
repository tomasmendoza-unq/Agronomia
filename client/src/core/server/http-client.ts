import axios from "axios";
import setResponseMiddlewares from "./middlewares/response/response-middlewares";

const http = axios.create({
    url: 'http://localhost:8080'
});

setResponseMiddlewares(http);

export default http;