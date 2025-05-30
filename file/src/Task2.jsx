import React, { useState } from "react"


const Color = () => {
    let color = ["red", "blue", "yellow", "green"];
    const [index, setindex] = useState(0);

    const colorhandler = () => {
        // const nextindex = (color + 1) % color[index];

        // console.log(nextindex);


        setindex(prev =>(prev + 1) % color.length)
    }

    return (
        <>
            <div style={{
                    background: color[index], height: "100vh", width: "100vw"
                }}>

                <button 
                    onClick={colorhandler}>
                     {color[index]}</button>
            </div>
        </>
    )
}

export default Color