import { createContext } from "react";
import type { UseAuth } from "../hooks/use-auth";

const AuthContext = createContext<UseAuth | null>(null);

export default AuthContext;