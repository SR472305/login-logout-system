import React, { useState } from "react";

export const LoginSystem = () => {
    const [user, setuser] = useState(null);

    const loginhandler = () => {
        const dummyuser = {
            username: "shyam123",
            name: "Shyam Rajhar"
        }

        setuser(dummyuser);;

    }

    const showuser = () => {
        if (user) {
            alert(`user logedin : ${user.name} (${user.username}) `)
        }
        else {
            alert(`please login`)
        }
    }


    const logout = () => {
        setuser(null)
    }


    return (
        <>
           <h1>Simple login System</h1>         
           
            <button onClick={loginhandler}>Login </button>


            <button onClick={showuser}>ShowUser</button>


            <button onClick={logout}>Logout</button>

           {user && <p>Welcome , {user.name}</p>}


        </>
    )
}