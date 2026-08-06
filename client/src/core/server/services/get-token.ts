import { TOKEN_KEY } from "../types/token-key";

const getToken = () => localStorage.getItem(TOKEN_KEY);

export default getToken;