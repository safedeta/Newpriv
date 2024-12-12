import { useContext, createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext({
    isAuthenticated: false,
});

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);