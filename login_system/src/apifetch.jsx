import React, { useEffect, useState } from "react";

const Json = ()=> {
  const [data , setdata] = useState([]);

  const jsonData = "https://jsonplaceholder.typicode.com/posts";
 
   
   useEffect (()=>{
              transferdata();
      },[])

      const transferdata = ()=>{
        fetch(jsonData)
          .then((resp) =>{
            return resp.json();
          })
          .then((data)=>{
            // console.log(data);
            setdata(data)
            
          })
      }

    return (
        <>
           {data.map((value) =>(
            <div key={value.id}>
                <h1>{value.title}</h1>
                <p>{value.body}</p>
            </div>
           ))}
        </>
    )
}

export default Json