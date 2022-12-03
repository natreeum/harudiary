import React, {useState} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Signup.css"
import {useNavigate} from "react-router-dom"
axios.defaults.withCredentials = true;


const Signup = () => {
    const [userInfo, setuserInfo] = useState({
        email: "",
        password: "",
        username: ""
    })

    const handleInputValue = (key) => (e) => {
        setuserInfo({...userInfo, [key]: e.target.value})
    }
    const navigate = useNavigate()

    const [passwordCheck, setPasswordCheck] = useState('');

    function validateForm(){
        return userInfo.username.length>0 && userInfo.password.length>0 && userInfo.email.length>0 && userInfo.password===passwordCheck
    }

    function handleSubmit(event){
        let isSigninSuccess = false
        event.preventDefault();
        if(
            userInfo.email &&
            userInfo.password &&
            userInfo.username
        ){
            axios.post("http://localhost:8080/signup", userInfo)
            .then((result)=>{
                console.log(result.data.status)
                result.data.status==="success"? isSigninSuccess=true : isSigninSuccess=false
            })
            .then(()=>{
                isSigninSuccess? navigate('/') : console.log("failed")
            }).catch((e)=>console.log(e))
        }
    }
    return(
       <div id="signup">
        <div id="title">
            <p>sign up</p>
            <div id="title_highlighter"></div>
        </div>
        <Form onSubmit={handleSubmit}>
        <div id="forms">
            <div id="border"> 
                <Form.Group size="lg" controlId="email">
                        <Form.Control
                            placeholder="email"
                            id="formbox" 
                            type="email"
                            value={userInfo.email}
                            onChange={handleInputValue("email")}/>
                </Form.Group>
            </div>
            <div id="border-1">
                <Form.Group size="lg" controlId="username">
                        <Form.Control
                            placeholder="username"
                            id="formbox" 
                            autoFocus 
                            type="username"
                            value={userInfo.username} 
                            onChange={handleInputValue("username")} />
                </Form.Group>
            </div>
            <div id="border-1">
                <Form.Group size="lg" controlId="password">
                        <Form.Control
                            placeholder="password"
                            id="formbox" 
                            type="password"
                            value={userInfo.password}
                            onChange={handleInputValue("password")} />
                </Form.Group>
            </div>
            <div id="border-1">
                <Form.Group size="lg" controlId="password">
                        <Form.Control
                            placeholder="password retype"
                            id="formbox" 
                            type="password"
                            value={passwordCheck}
                            onChange={(e)=>setPasswordCheck(e.target.value)}/>
                </Form.Group>
            </div>
        </div>
            <Button 
                    id="loginBTN" size="lg" type="submit" disabled={!validateForm()}>
                    continue
            </Button>
            
        </Form>
        
       </div> 
    )
}
export default Signup;