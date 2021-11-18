import { createContext, useEffect, useState } from "react";
import api from "../service/api";

export const AuthContext = createContext();

export function AuthProvider(props) {
    const [user, setUser] = useState(null)

    async function signIn(email, password) {
        const response = await api.post('authenticate', {
            email: email, 
            password: password
        })

        console.log(response)

        const { token, user } = response.data

        localStorage.setItem('@wasd:token', token);

        api.defaults.headers.common.authorization = `Bearer ${token}`

        setUser(user);
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@wasd:token')
    }

    useEffect(() => {
        const token = localStorage.getItem('@wasd:token')

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get('user').then(response => {
                setUser(response.data)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, signOut, signIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}