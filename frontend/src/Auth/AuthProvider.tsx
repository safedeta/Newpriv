import { useContext, createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import type { AuthResponse, AccessTokenResponse, User } from "../types/types"
import React from 'react';
import { API_URL } from "./constants";
const AuthContext = createContext({
    isAuthenticated: false,
    getAccesToken: () => {},
    saveUser: (userData: AuthResponse) => {},
    getRefreshToken: () => {},
});

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState<String>("");
    const [user, setUser] = useState<User>();
    //? tal vez esto se pueda omitir
    // const [refreshToken, setRefreshToken] = useState<String>("");

    useEffect(() => {}, []);

    async function requestNewAccessToken(refreshToken:string){
        try {
            const response = await fetch(`${API_URL}/refresh-token`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${refreshToken}`,
                }
            });
            if(response.ok){
                const json = await response.json() as AccessTokenResponse;

                if(json.error){
                    throw new Error(json.error);
                    
                }
                return json.body.accessToken;
            }else{
                throw new Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function getUserInfo(accessToken:string) {
        try {
            const response = await fetch(`${API_URL}/user`,{
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                }
            });
            if(response.ok){
                const json = await response.json();

                if(json.error){
                    throw new Error(json.error);
                }
                return json;
            }else{
                throw new Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function checkAuth(){
        if(accessToken){
            //el usuario esta autenticado
        }else{
            //el usuario no esta autenticado
            const token = getRefreshToken();
            if(token){
                const newAccessToken = await requestNewAccessToken(token);
                if(newAccessToken){
                    const userInfo = await getUserInfo(newAccessToken);
                    if(userInfo){
                        saveSessionInfo(userInfo, newAccessToken, token);
                    }
                }      
            }
        }
    }

    function saveSessionInfo(userInfo:User, accessToken:string, refreshToken:string){
        setAccessToken(accessToken);
        localStorage.setItem("token", JSON.stringify(refreshToken));
        setIsAuthenticated(true);
        setUser(userInfo)
    }

    function getAccesToken(){
        return accessToken;
    }

    function getRefreshToken():string|null {
        const token = localStorage.getItem("token");
        if(token){
            const {refreshToken} = JSON.parse(token);
            return refreshToken;
        }
        return null;
    }

    function saveUser(userData: AuthResponse){
        saveSessionInfo(userData.body.user, userData.body.accessToken, userData.body.refreshToken);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, getAccesToken, saveUser, getRefreshToken}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);