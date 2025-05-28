import React, { useState } from "react";


function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [showmessage, setshowmessage] = useState(false);

    // login/logout function
    const handleloginlogout = () => {
        if (!loggedIn) {
            setLoggedIn(true);
            setshowmessage(true);
            setTimeout(() => { setshowmessage(false); }, 3000);


        } else {
            setLoggedIn(false);
        }
    };

    return (
        <div style={style.container}>
            <h1>{loggedIn ? 'Welcome Back!..' : 'Please Login '}</h1>

            {showmessage && <p style={style.success}>Login successfull</p>}

            <button style={{
                ...style.button,
                backgroundColor: loggedIn ? 'red' : 'green',
                color: 'white',

            }} onClick={handleloginlogout}>
                {loggedIn ? 'logut' : "login"}
            </button>
        </div>
    );
}

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    button: {
        // backgroundColor: loggedIn ? 'red' : 'green',
        // color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    success: {
        color: 'green',
        fontSize: '18px',
    }

    
}
    export default App;





// if i remove the showmessage state, the message will not be shown
// another way to do this  {showmessage && <p style={style.success}>Login successful</p>} i have to change the showmessage as a loggedin
//  {loggedIn && <p style={style.success}>Login successful</p>} to show the message only when logged in and stay present until the user logs out
// then i have to use single state for loggedIn 