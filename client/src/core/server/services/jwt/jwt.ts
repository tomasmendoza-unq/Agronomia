import { jwtDecode } from "jwt-decode";
import { TOKEN_KEY } from "./token-key";

export function setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function isAuthenticate() {
    const token = localStorage.getItem(TOKEN_KEY);
    return token && !isExpirate(token);
}

function isExpirate(token: string) {
    const payload = jwtDecode(token);
    return payload.exp && payload.exp * 1000 < Date.now();
}

