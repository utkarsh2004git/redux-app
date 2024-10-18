import React from 'react'
const UserContext = React.createContext<{
    userName?: string,
    setUserName?:React.Dispatch<React.SetStateAction<string>>
}>({})
export default UserContext