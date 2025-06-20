import React, { createContext } from 'react'


export const Userdetail = createContext();


const Register = ({children}) => {
    const Multipleuser = [
        {
            username: "john_doe",
            email: "john@example.com",
            password: "John@1234"
        },
        {
            username: "priya_singh",
            email: "priya@example.com",
            password: "Priya#5678"
        },
        {
            username: "rahul99",
            email: "rahul99@example.com",
            password: "Rahul@2025"
        },
        {
            username: "alex_dev",
            email: "alex.dev@example.com",
            password: "AlexDev!789"
        },
        {
            username: "meera_k",
            email: "meera.k@example.com",
            password: "Meera@321"
        }
    ];

    return (
        <>
          <Userdetail.Provider value={Multipleuser}>
              {children}
          </Userdetail.Provider>
        </>
    )
}

export default Register
