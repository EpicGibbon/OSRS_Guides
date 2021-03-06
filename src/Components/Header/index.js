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
            <nav className="no-nav">
                <div class="nav-wrapper">
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="/raids" className="raids">Raids</a></li>
                        <li><a href="/bosses" className="bossing">Bossing</a></li>
                        <li><a href="/skills" className="skills">Skills</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}



export default Header;