import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Landing.css"
export default function Landing() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function validateForm(){
        return username.length>0 && password.length>0
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log("submit")
    }
    return(
       <div className="login">
        <div id="title">
            <p>haru diary</p>
            <div id="title_highlighter"></div>
        </div>
        <div id="fieldset">
            <Form onSubmit={handleSubmit}>
            <div id="border">
                <Form.Group size="lg" controlId="username">
                    <Form.Control
                        placeholder="username"
                        id="formbox" 
                        autoFocus 
                        type="username"
                        value={username} 
                        onChange={(e)=>setUsername(e.target.value)} />
                </Form.Group>
            </div>
            <div id="border-1">
                <Form.Group size="lg" controlId="password">
                    <Form.Control
                        placeholder="password"
                        id="formbox" 
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
            </div>    

                <Button 
                    id="loginBTN" size="lg" type="submit" disabled={!validateForm()}>
                    continue
                    <div id="highlighter"></div>
                </Button>
            </Form>
        </div>
       </div> 
    )
}