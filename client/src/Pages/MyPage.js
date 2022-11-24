import React from "react";
import "./MyPage.css"
import axios from "axios"

axios.defaults.withCredentials = true

const MyPage = (props) => {
    if(props.userInfo){
        return(
            <div id="mypage">
                <div id="title">
                    <p>{props.userInfo.username}</p>
                    <div id="title_highlighter"></div>
                </div>
            </div> 
         )
    }
    
}
export default MyPage;