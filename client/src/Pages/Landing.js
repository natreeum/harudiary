import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./Landing.css"

axios.defaults.withCredentials = true;
export default function Landing() {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    })
    //const [isSigninSuccess, setSigninSuccess] = useState(false) 이게왜안되지
    

    const handleInputValue = (key) => (e) => {
        setLoginInfo({...loginInfo, [key]: e.target.value})
    }
    function validateForm(){
        return loginInfo.username.length>0 && loginInfo.password.length>0
    }
    const navigate = useNavigate()

    function handleSubmit(event){
        let isSigninSuccess = false
        event.preventDefault();
        if(loginInfo.username && loginInfo.password){
            axios.post("http://localhost:8080/signin", loginInfo)
            .then((result) => {
                console.log(result.data.status)
                result.data.status==="success" ? isSigninSuccess=true : isSigninSuccess=false
            })
            .then(() => {
                isSigninSuccess ? navigate('/mypage') : console.log("failed")})
            .catch((e)=>console.log(e))
            
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
                </Button>
            <div id="links">
            <Link to='/signup'>
                sign up
            </Link> <br/>
            <Link to='/recover'>
                forgot password?
            </Link>  
            </div>

            </Form>
        </div>
       </div> 
    )
}