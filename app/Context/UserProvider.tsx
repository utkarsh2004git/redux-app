import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode, useState } from 'react'
import UserContext from './UserContext'

const UserProvider = ({children}:{children:ReactNode}) => {
    const [userName, setUserName] = useState("");

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

const styles = StyleSheet.create({});
