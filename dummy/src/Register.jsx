import React, { createContext } from 'react'
import Login from './login';

 export const RegisterData = createContext();

const Register = ({children}) => {
    const details = [
        {
           username : "shyam01",
           password : "shyam123",
        },
        {
            username : "jay456",
            password : "jay78945"
        }
    ]
       
  return (
    <div>
       <RegisterData.Provider value={RegisterData}>
                {children}
                {/* <Login /> */}
       </RegisterData.Provider>
    </div>
  )
}

export default Register
