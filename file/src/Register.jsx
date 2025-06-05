import React, { useState } from "react";


const Register = () => {
    const [data, setdata] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const [Error, setError] = useState();

    const [Error2, setError2] = useState();

    const [Error3, setError3] = useState();

    const [Error4, setError4] = useState();
     const [Error5, setError5] = useState();

    const GetinputValue = (event) => {
        // console.log(event.target.value);

        const { name, value } = event.target;
        setdata((predata) => ({ ...predata, [name]: value }))

    }

    const formhandler = (event) => {
        event.preventDefault();

        console.log(data);

        // const [Error, setError] = useState();

        if (data.fname.length == "") {

            setError("name is required");
        }
        else {
            setError("")
        }

        if (data.lname.length == ""){
            setError2("Last Name is Required")
        }
        else{
            setError2("")
        }

        if (data.email == ""){
            setError3("Email is Required")
        }else{
            setError3("")
        }
          
        if(data.password == "" ){
            setError4("Password is Required")
        }else if( data.password < 8){
            setError4("Password must be more than Eight Digit")
        }else{
            setError4("")
        }

        if(data.password !== data.cpassword){
            setError5("Invalid password")
        }
        else{
            setError5("")
        }


    }




    return (
        <>
            <div className="container" >
               
                <form action="" onSubmit={formhandler}>
                     <h1>Register From</h1>

                    <label htmlFor="">Name</label><br />
                    <input type="text" name="fname" id="name" placeholder="Enter your name" onInput={GetinputValue} /><br />
                    <small style={{ color: "red" }}>{Error}</small><br /><br />

                    <label htmlFor="">Last Name</label><br />
                    <input type="text" name="lname" id="last" placeholder="Enter your Last name" onInput={GetinputValue} /><br />
                    <small style={{ color: "red" }}>{Error2}</small><br /><br />

                    <label htmlFor="">Email</label><br />
                    <input type="email" name="email" id="email" placeholder="Enter your email" onInput={GetinputValue} /><br />
                      <small style={{ color: "red" }}>{Error3}</small><br /><br />


                    <label htmlFor="">Password</label><br />
                    <input type="password" name="password" id="password" placeholder="Enter your password" onInput={GetinputValue} /><br />
                    <small style={{ color: "red" }}>{Error4}</small><br /><br />

                    <label htmlFor="">Comfirm Password</label><br />
                    <input type="password" name="cpassword" id="cpassword" placeholder="Enter your password" onInput={GetinputValue} /><br />
                    <small style={{ color: "red" }}>{Error5}</small><br /><br />

                    <input type="submit" value="Submit" />



                </form>
            </div>

        </>

    )
}


export default Register