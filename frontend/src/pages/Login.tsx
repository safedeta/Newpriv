import React from 'react';
import { useState } from 'react';
import { useAuth } from '../Auth/AuthProvider';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../Auth/constants';
import { AuthResponseError } from '../types/types';
import { AuthResponse } from '../types/types';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorResponse, setErrorResponse] = useState('');

    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password}),
            });

            if(response.ok){
                setErrorResponse('');
                const json = (await response.json()) as AuthResponse;
                
                if(json.body.accessToken && json.body.refreshToken){
                    auth.saveUser(json);
                }

                goTo('/Dasboard');
            }else{
                const json = (await response.json()) as AuthResponseError;
                setErrorResponse(json.body.error);
                return
            }
        } catch (error) {
            console.log(error);            
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to="/Home"/>
    }
    return <form className='form' onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mt-8">Login</h1>
        {!!errorResponse && <p className="text-red-500 text-center">{errorResponse}</p>}
        <label>Username: </label>
        <input 
            type="text" 
            value={username} 
            onChange={(e)=>setUsername(e.currentTarget.value)}
        />
        <label>Password: </label>
        <input 
            type="password" 
            value={password} 
            onChange={(e)=>setPassword(e.currentTarget.value)}
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">Login</button>
    </form>
}