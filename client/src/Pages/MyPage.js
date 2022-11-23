import React from "react";
import "./MyPage.css"
import axios from "axios"

axios.defaults.withCredentials = true

const MyPage = (props) => {
    if(props.userInfo){
        return(
            <div>
             <p>mypage</p>
            </div> 
         )
    }
    
}
export default MyPage;