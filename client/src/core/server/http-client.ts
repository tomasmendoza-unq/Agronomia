import axios from "axios";
import setResponseMiddlewares from "./middlewares/response/response-middlewares";
import setRequestMiddlewares from "./middlewares/request/request-middlewares";

const baseURL =
    (import.meta?.env?.VITE_API_BASE_URL as string) || "http://localhost:8080";

const http = axios.create({
    baseURL,
});

setRequestMiddlewares(http);
setResponseMiddlewares(http);

export default http;
