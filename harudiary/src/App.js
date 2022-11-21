import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Sidebar from './Sidebar';
import MyPage from "./Pages/MyPage"
import Timeline from "./Pages/Timeline"
import Signup from "./Pages/Signup"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='App'>
          <main>
            <Sidebar/>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
