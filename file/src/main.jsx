import React from "react";
import ReactDOM from "react-dom/client";
import App, { App1 } from "./App";
import Detail from "./Detail";

let name = "shyam";
let age = 23;
let location = "mumbai";

ReactDOM.createRoot(document.getElementById("root")).render(

<div>
    <App  student_name={name} student_age={age} student_loction={location}/>
    <App1 />
    <Detail.Detail1/>
    <Detail.Detail2/>
</div>

)