'use client'

import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export function Authentication({children}) {
    const [isAuth, setAuth] = useState(false);

    return (
        <AuthenticationContext.Provider value={{ isAuth, setAuth }}>
            {children}
        </AuthenticationContext.Provider>
    );
}