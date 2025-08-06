// we are making this in jsx caause the other user components can then access it 
import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    return (
        <UserContext.Provider value= {{user, setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider