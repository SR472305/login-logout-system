import React, { useContext, useState } from 'react'
import Register, { RegisterData } from './Register';


const Login = () => {
    const [formdata, setformdata] = useState({
        username: "",
        password: ""
    })

    const [islogin, setislogin] = useState();

    const getinput = (e) => {
        setformdata((prevdata) => ({
            ...prevdata,
            [e.target.name]: e.target.value,
        }))
    }

    const submithandler = (e) => {
        e.preventDefault();
        console.log(formdata);

        // const ismatch = Registerdata.some(
        //     (user) =>
        //         user.username === formdata.username &&
        //         user.password === formdata.password
        // );
        // setislogin(ismatch)

         if (formdata.username === "shyam01" && formdata.password === "shyam123") {
      setislogin(true);
    } else {
      setislogin(false);
    }
  };
    


    const { Registerdata } = useContext(RegisterData)
    return (
        <div>
            <h1>login page</h1>
            <label htmlFor="user">Username : </label><br />
            <input type="text"
                name='username'
                placeholder='Enter your username'
                onInput={getinput}
            />

            <label htmlFor="password">Password</label><br />
            <input type="password"
                name='password'
                placeholder='Enter your password'
                onInput={getinput}
            />

            <button onClick={submithandler}>Submit</button><br />

            {islogin !== null && (
                <p>{islogin ? "Login successful" : "Login failed"}</p>
            )}
        </div>
    )
}

export default Login
