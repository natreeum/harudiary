import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Sidebar from './Sidebar';
import MyPage from "./Pages/MyPage"
import Timeline from "./Pages/Timeline"
import Signup from "./Pages/Signup"
import { Landing } from 'mocha/lib/reporters';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='App'>
          <main>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<Landing/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/mypage' element={<MyPage/>}></Route>
              <Route path='/timeline' element={<Timeline/>}></Route>
            </Routes>

          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
