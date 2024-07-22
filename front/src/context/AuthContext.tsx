"use client"

import { IUserSession } from "@/interface/IUser"
import { createContext, useContext, useState, useEffect } from "react"

interface AuthContextProps {
    dataUser: IUserSession | null,
    setDataUser: (dataUser: IUserSession|null) => void
}

const AuthContext = createContext<AuthContextProps>({
    dataUser: null,
    setDataUser: () => {},
  
})

interface AuthProviderProps{
    children: React.ReactElement
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [dataUser, setDataUser] = useState<IUserSession | null> (null)

    

    //aca guardamos en la localstorage
    useEffect (() => {
        if(dataUser){
            localStorage.setItem("userSession", JSON.stringify(dataUser))
        }
        
    }, [dataUser])

    useEffect (() => {
        if(typeof window !== "undefined" && window.localStorage ){
            const data = localStorage.getItem("userSession");
            setDataUser(JSON.parse(data!));
        }
    },[])



    return (
        <AuthContext.Provider value={{dataUser, setDataUser}}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => useContext(AuthContext)