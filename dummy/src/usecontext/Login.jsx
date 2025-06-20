import React, { useContext, useState } from 'react'
import { Userdetail } from './Register'

const Login = () => {

    const  Multipleuser  = useContext(Userdetail)
    const [formdata, setformdat] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [Islogin, setIslogin] = useState(null)
    // const [hassubmited,sethassubmited] = useState(false)
    // const [logginuser ,setlogginuser] = useState(null)

    const getinput = (e) => {
        setformdat((prevdata) => ({
            ...prevdata,
            [e.target.name]: e.target.value
        }))
    }

    const submithandler = (e) => {
        e.preventDefault();
        console.log(formdata);
        // sethassubmited(true)
        
        const tomatch = Multipleuser.some(
            (user) =>
                user.username === formdata.username &&
                user.email === formdata.email &&
                user.password === formdata.password
            );

            if(tomatch){
                
                setIslogin(true)
                // setlogginuser(tomatch)
            }else{
                setIslogin(false)
            }

        // if(formdata.username === Multipleuser.username && formdata.email === Multipleuser.email && formdata.password === Multipleuser.password){
        //     setIslogin(true);
        // }else{
        //     setIslogin(false);
        // }
        // let found = false;
        // for (let user of Multipleuser) {
        //     if (
        //         user.username === formdata.username &&
        //         user.email === formdata.email &&
        //         user.password === formdata.password
        //     ) {
        //         found = true;
        //         break;
        //     }
        // }

        // if (found) {
        //     setIslogin(true)
        //     console.log("pass");
            
        // } else {
        //     setIslogin(false)
        //     console.log("fail");
            
        }
    

        // if(!Array.isArray(Multipleuser)){

        //     console.error("Multipleuser is not an  Array");
        //     return;
        // }
    



    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label><br />
                    <input type="text"
                        name='username'
                        placeholder='Enter your name'
                        onChange={getinput}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email"
                        name='email'
                        placeholder='Enter your Email'
                        onChange={getinput}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password"
                        name='password'
                        placeholder='Enter your name'
                        onChange={getinput}

                    />
                </div><br />

                <button onClick={submithandler}> SUBMIT</button>

                {Islogin !== null && (
                    <h3>{Islogin ? `Login Successfull` : "Login Failed"}</h3>
                )}

            </form>

        </>
    )
}

export default Login
