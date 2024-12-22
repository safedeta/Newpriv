import { useContext, createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
/* import type {AuthResponse} from "../types/types" */

const AuthContext = createContext({
    isAuthenticated: false,
    getAccesToken: () => {},
    saveUser: (userData) => {},
});

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState<string>("");
    const [refreshToken, setRefreshToken] = useState<string>("");

    function getAccesToken(){
        return accessToken;
    }

    function saveUser(userData){
        setAccessToken(userData.body.accessToken);
        setRefreshToken(userData.body.refreshToken);

        localStorage.setItem("token", JSON.stringify(userData.body.refreshToken));
        setIsAuthenticated(true);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, getAccesToken, saveUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);