import React from 'react'
import {NavLink} from 'react-router-dom'
import {MdBlock,MdSchedule} from 'react-icons/md'
import {GiBroom} from 'react-icons/gi'
 
const NavBar = () =>{
    return(
        <header>
            <nav>
                <div className="Navbar">
                    <NavLink className="nav-a" exact to="/"><MdBlock/></NavLink>
                    <NavLink className="nav-a" exact to="/timetable"><MdSchedule/></NavLink>
                    <NavLink className="nav-a" exact to="/cleaningschedule"><GiBroom/></NavLink>
                </div>
            </nav>
        </header>
    )
}

export default NavBar