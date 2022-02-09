import React from 'react';
import "./style.css"

function Footer(){
    return (
        <footer className="footer">
            <h4 className="footer-text"> Made by the dreamteam</h4>
            <img src={require("../../Images/bottom.png")} className="footer-image"></img>   
        </footer>
    )
}

export default Footer;