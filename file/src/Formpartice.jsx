import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {

        case "detail":
            return {
                ...state, [action.name]: action.value,


                error: {
                    ...state.error,

                    [action.error]: ""
                }
            }

        case "set_errors":
            return {
                ...state,
                error: action.error
            }
        default:
            return {
                state
            }

    }


}
function Formpartice() {

    const initalstate = {
        name: "",
        number: '',
        error: {
            name: "",
            number: ""
        }
    }

    const [formvalue, dispatch] = useReducer(reducer, initalstate)

    const inputvalue = (e) => {
        dispatch({
            type: "detail",
            name: e.target.name,
            value: e.target.value,
        })
    }

    const formsubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        
        if(Object.keys(errors).length>0){
            dispatch({type:"set_errors" , error: errors })
        }else{
            console.log(formvalue);
            
        }

    }

    const validate = () => {
        const error = {};

        if (!formvalue.name.trim()) {
            error.name = "Name is required";
        } else {
            error.name = "";
        }

        if (!formvalue.number.trim()) {
            error.number = "Number is required";
        } else if (!/^\d{10}$/.test(formvalue.number)) {
            error.number = "Please enter 10 digit number"
        }
        else {
            error.number = "";
        }
      return error
    }
}


return (
    <div>
        <form action="">
            <label htmlFor="name">name </label><br />
            <input type="text"
                name='name'
                 id='name' 
                value={formvalue.name}
                onChange={inputvalue} />
            <br />

            {error.name && (
                <small style={{ color: "red" }}></small>
            )}

            <label htmlFor="number">Contact</label><br />
            <input type="text"
                name='number'
                id='number'
                value={formvalue.number}
                onChange={inputvalue} /><br />
            {error.number && (
                <small style={{ color: "red" }}></small>
            )}

            <input type="submit" value="Submit" onClick={formsubmit} />
        </form>
    </div>
)


export default Formpartice
