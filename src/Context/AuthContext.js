import { useState } from "react";
import { createContext } from "react";

export let AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [d, setd] = useState("hi")
    const[isLoading,setIsLoading]=useState(true)
    const[userToken,setUserToken]=useState(null)

    //logIn
    const login2=()=>{
        setUserToken("hjk")
        setIsLoading(false)
    }
    //logout
    const logout2=()=> {
        setUserToken(null)
        setIsLoading(false)
    }
    return (
        <AuthContext.Provider value={{ d,login2,logout2 ,isLoading,userToken}}>
            {children}
        </AuthContext.Provider>
    )
}