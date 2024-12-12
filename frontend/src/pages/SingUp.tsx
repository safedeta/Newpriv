import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';
import { API_URL } from '../Auth/constants';
import { AuthResponseError } from '../types/types';

export default function SingUp() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorResponse, setErrorResponse] = useState('');


    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, username, password}),
            });

            if(response.ok){
                setErrorResponse('');
                console.log('User created');

                goTo('/login');
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
    return <form className='form' onSubmit={(handleSubmit)}>
        <h1 className="text-3xl font-bold text-center mt-8">Sing Up</h1>
        {!!errorResponse && <p className="text-red-500 text-center">{errorResponse}</p>}
        <label>Name: </label>
        <input 
            type="text" 
            value={name} 
            onChange={(e)=>setName(e.currentTarget.value)}
        />
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
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">Creat User</button>
    </form>
}