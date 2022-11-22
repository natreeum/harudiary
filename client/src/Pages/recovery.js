import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import './Recovery.css'

const Recovery = () => {
    const [email, setEmail] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log("submit")
    }
    function validateForm(){
        return  email.length>0
    }
    return(
        <div id="recover">
        <div id="title">
            <p>password recovery</p>
            <div id="title_highlighter1"></div>
        </div>
        <p id="text">please enter email to recover your password.</p>
        <Form onSubmit={handleSubmit}>
        <div id="border"> 
        <Form.Group size="lg" controlId="email">
                <Form.Control
                    placeholder="email"
                    id="formbox" 
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
    </div>
        <Link to='/'>
            <Button 
                    id="loginBTN" size="lg" type="submit" disabled={!validateForm()}>
                    recover
                    <div id="highlighter"></div>
            </Button>
        </Link>
    </Form>
        </div>

    )
}
export default Recovery;