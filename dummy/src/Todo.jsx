// import React, { useReducer } from 'react'

// const reducer = (state ,action)=>{
//     switch(action.type){
//         case "Addon":
//             return{
//                 ...state , 
//                 todo : action.value,
//             };
//             default :
//              return state;
//     }

// }

// const Todo = () => {
//     const initalstate = {
//        todo : ""
//     }
//     const[TextTrackList, dispatch] = useReducer(reducer, initalstate)

//      const Addtask =(e)=>{
//          e.preventDefault();


//          const inputdata = e.target.value
//          dispatch({type : "Addon" , value : inputdata })
//          console.log("Add Data",TextTrackList);

//      }
//     return (
//         <div>
//             <input type="text" placeholder='Enter your task' />
//             <button onClick={Addtask}>Add</button>

//             <h2>Task which you have add now {TextTrackList.todo}</h2>
//         </div>
//     )
// }

// export default Todo

// Second method 


import React, { useReducer } from 'react'
const reducer = (state,action) => {
    switch (action.type) {
        case "ADD_btn":
            return{
                ...state ,
               todo :
                   action.value

            }

            case"UPDATE_DATA":
            return{
                ...state,
                todo : state.input,
                input : ""

            }
    
        default:
            return state;
    }
 }
const Todo = () => {
    const initalstate = {
       input :"",
       todo : ""
    }

    const Add_on = (e) => {
        e.preventDefault();

        dispatch({ type: "ADD_btn" ,value : e.target.value })
        console.log("input value",addtask );
        
    }

    const inputhandler = (e)=>{
            dispatch({type :"UPDATE_DATA" , addtask : e.target.value})
            // console.log("update task" , );
            
    }

    const [Task, dispatch] = useReducer(reducer, initalstate)
    return (
        <div>
            <input type="text"
                placeholder='Enter you task'
                onChange={inputhandler}
                // value={state.input}
            />
            <button onClick={Add_on}>Add</button>

            <h3>ADD On Task <br />
                {Task.todo}
             </h3>
        </div>
    )
}

export default Todo
