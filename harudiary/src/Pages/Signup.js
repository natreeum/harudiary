import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Signup.css"
const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    function validateForm(){
        return username.length>0 && password.length>0 && email.length>0
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log("submit")
    }
    return(
       <div id="signup">
        <div id="title">
            <p>sign up</p>
            <div id="title_highlighter"></div>
        </div>
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
        <div id="border-1"> 
            <Form.Group size="lg" controlId="email">
                    <Form.Control
                        placeholder="email"
                        id="formbox" 
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
        </div>
            <Button 
                    id="loginBTN" size="lg" type="submit" disabled={!validateForm()}>
                    continue
                    <div id="highlighter"></div>
            </Button>
        </Form>
       </div> 
    )
}
export default Signup;