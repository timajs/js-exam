import React from 'react';
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItems";
import './NavBar.css'

function NavBar() {
    return(
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
            {MenuItems.map((item, index) => {
            return (
             <div className="nav-link" key={index}>
                <Link className={item.cName} to={item.url}>{item.title}</Link>
            </div>
            );
          })}
            </ul>
        </nav>
    )
}

export default NavBar 