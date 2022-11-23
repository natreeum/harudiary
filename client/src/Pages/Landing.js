import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./Landing.css"


export default function Landing() {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    })
    const handleInputValue = (key) => (e) => {
        setLoginInfo({...loginInfo, [key]: e.target.value})
    }
    function validateForm(){
        return loginInfo.username.length>0 && loginInfo.password.length>0
    }
    const navigate = useNavigate()
    async function handleSubmit(event){
        event.preventDefault();
        if(loginInfo.username && loginInfo.password){
            const result = await axios.post("http://localhost:8080/signin", loginInfo)
            console.log(result)
            navigate("/mypage")
        }
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
                <Form.Group size="lg">
                    <Form.Control
                        placeholder="username"
                        id="formbox" 
                        autoFocus 
                        type="username"
                        value={loginInfo.username} 
                        onChange={handleInputValue("username")}/>
                </Form.Group>
            </div>
            <div id="border-1">
                <Form.Group size="lg">
                    <Form.Control
                        placeholder="password"
                        id="formbox" 
                        type="password"
                        value={loginInfo.password}
                        onChange={handleInputValue("password")}/>
                </Form.Group>
            </div>    
                <Button 
                    id="loginBTN" size="lg" type="submit" disabled={!validateForm()}>
                    continue
                    <div id="highlighter"></div>
                </Button>
            <Link to='/signup'>
                sign up
            </Link> <br/>
            <Link to='recover'>
                forgot password?
            </Link>  
            </Form>
        </div>
       </div> 
    )
}