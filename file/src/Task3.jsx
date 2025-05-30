import React, { useEffect, useState } from "react";

export const Multip = () => {
  const [color,setcolor] = useState();

  useEffect (()=>{
    document.body.style.backgroundColor = color
  },[color])


    return (
        <>
           <h1 style={{background : {color}}}>current Color : {color}</h1>
            <button onClick={()=> setcolor("red")}   style={ {border : "2px solid black"}}
                >red</button>
            <button onClick={()=> setcolor("blue")}   style={{ border : "2px solid black"}}
                >blue</button>
            <button onClick={()=> setcolor("green")}  style={{border : "2px solid black"}}
                >green</button>
            <button onClick={()=> setcolor("yellow")} style={{border : "2px solid black"}}
                >yellow</button>
        </>
    )
}