import React from "react";
import "./MyPage.css"
import axios from "axios"
import Calendar from 'react-calendar'; 
import {useState} from 'react';

axios.defaults.withCredentials = true

const MyPage = () => {
    const [date, setDate] = useState(new Date())
        return(
            <div id="mypage">
                <div id="mypage_title">
                    <p>{date.toDateString()}</p>
                    <div id="mypage_title_highlighter"></div>
                </div> <br></br>
                <div id="row">
                    <div className="col-lg-8" id="calendar">
                    <Calendar onChange={setDate} value={date}/>
                    </div>
                    <div className="col-lg-4" id="todo"></div>
                </div>
            </div> 
         )
    }
    
export default MyPage;