import React from "react"; 


const Status = (props)=>{
    
    return(
        <>

            <h1>
                {props.islogin ? "welcome ,shyam" : "please login"}
            </h1>
            <button onClick={props.btn}>login</button>
                   
        </>
    )
}

export default Status



// let btn = "button clicked !";

// const btnhandler = () => {

    
//         console.log("login successfull");

    
// }
// let isloginedin = true;


{/* <Status btn={btnhandler} isloginedin={isloginedin} /> */}

