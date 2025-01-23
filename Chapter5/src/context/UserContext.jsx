import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
    const [isAuthenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem('Auth')) || false);
    const [userList, setUserList] = useState(JSON.parse(localStorage.getItem('userList')) || [])
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <UserContext.Provider value={{userList,setUserList,username,setUserName,email,setEmail,password,setPassword, isAuthenticated, setAuthenticated }}>
            {props.children}
        </UserContext.Provider>
    );
};


export const useUser = () => {
    return useContext(UserContext);
};
