import { createContext } from "react";
import type { UseAuth } from "../hooks/useAuth.hook";

const AuthContext = createContext<UseAuth | null>(null);

export default AuthContext;