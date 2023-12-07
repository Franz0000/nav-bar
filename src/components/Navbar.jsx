import React, { useEffect, useState, useRef} from 'react';
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
    const [open , setOpen] = useState(false)
    let dropDowMenuRef = useRef()
    
    useEffect(()=>{
        //set handler to check if the mouse click outside the toggle then setOpen to false or close the toggle
        let handler = (e) =>{
            if(!dropDowMenuRef.current.contains(e.target))  {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
    })

    return (
        < >
        <div ref = {dropDowMenuRef}>
            <nav className="container navbar" >
                    <h2 className='logo'>Franz</h2>
                    <ul className='navbar-links'>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                        <li>websites</li>
                    </ul>
                    <button className='subscribe-button'>Subscribe</button>
                    <div className='toggle-button' type='button' onClick={() =>{setOpen(!open)}}><FaBars /></div>
                </nav>
                <div className={`dropdown-menu ${open? 'active' :'inactive'}` }  >
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                        <li>websites</li>
                        <button className='subscribe-button'>Subscribe</button>
                </div>
        </div>

        </>

    );
};

export default Navbar;