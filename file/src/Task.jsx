import React, { useState } from "react";

const Task = () => {
    const [Counter, setcounter] = useState(0);
    const [maxno, highermaxno] = useState(20);
    const [mimno, leastmimno] = useState(0);

    const addon = () => {
        if (Counter < 20){
            setcounter(Counter +1)
        }
    }


    const takeof = () => {
        if(Counter > 0){

            setcounter(Counter - 1)
        }
    }

    // const reset = () => {
    //     setcounter(0)
    // }

    return (
        <>
            <h1> using hook in  usestate </h1>

            <h1>Counter counting :{Counter} </h1>

                
            <div className="btn1">
            <button onClick={addon}>Increment</button>
            </div>


            <div>
            <button onClick={takeof}>decrement</button>
            </div>

            {/* <button onClick={reset}>Reset</button> */}



        </>
    )
}

export default Task