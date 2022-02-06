import React from "react";
import './style.css';
import { render } from "react-dom";
import { Link } from 'react-router-dom';


function Header() {

    return (
        <div>
            <img src="https://runescape.oldskoolfan.net/assets/images/osrsHeader.png"></img>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">OSRS Guides</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Raids</a></li>
                        <li><a href="badges.html">Bossing</a></li>
                        <li><a href="collapsible.html">Skills</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}



export default Header;