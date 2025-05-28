import React from "react";


//export default function App() {
const App = (props) => {
    return(
        <div>

         <h1 style={{background:"red", border:"2px solid black", color:"whitesmoke", borderRadius:"5px", padding:"10px"}}>{props.student_name}</h1>
         <h1 style={{background:"green", border:"2px solid black", color:"whitesmoke", borderRadius:"5px", padding:"10px"}}>{props.student_age}</h1>
         <h1>{props.student_location}</h1>
            <h1>hello shyam</h1>
        
        </div>
    )
}

//name export 

let animal =  "{ wolf }"
export const App1 = (props) => {
    return(
        
            <h1>hello react {animal}</h1>
        
    )
}
export default App;

