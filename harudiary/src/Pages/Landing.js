import React from "react";
import "./Landing.css"
const Landing = () => {
    return(
       <div>
        <div id="title">
            <h1>HARU DIARY</h1>
        </div>
        <div id="fieldset">
            <p>username</p>
            <input id="username"></input>
            <p>password</p>
            <input id="password"></input> <br/><br/>
            <button id="signin"> sign in </button><br/><br/>
            <button id="signup"> Sign up</button><br/><br/>
            <button id="forgot">Forgot your password?</button>
        </div>
       </div> 
    )
}
export default Landing;