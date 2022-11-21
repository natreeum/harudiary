import React from 'react'
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <section className='sidebar'>
            <Link to="/"> Landing </Link>
            <Link to='/mypage'> MyPage </Link>
            <Link to="/timeline"> Timeline </Link>
        </section>
    )
}

export default Sidebar