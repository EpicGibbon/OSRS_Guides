import React from "react";
import './style.css';
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import logo from '../../Images/header.png';

function Header() {

    return (
        <div>
            <h1>OSRS Guides</h1>
            <img src={require("../../Images/header.png")} className="heading"></img>
            <img src={require("../../Images/top.png")} className="top"></img>
            {/* <img src={require("../../Images/middle.png")} className="middle"></img>
            <img src={require("../../Images/bottom.png")} className="bottom"></img> */}
            <nav className="no-nav">
                <div class="nav-wrapper">
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="sass.html" className="raids">Raids</a></li>
                        <li><a href="badges.html" className="bossing">Bossing</a></li>
                        <li><a href="collapsible.html" className="skills">Skills</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}



export default Header;