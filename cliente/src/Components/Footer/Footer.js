import React from "react";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import "./Footer-module.css"

export default function Footer() {
    return (
        <div className="Footer">
            <div>
                <a href="mailto:tomasdibacco@gmail.com" rel="noopener noreferrer" target="_blank"><SiGmail className="iconosFooter" /></a>
                <a href="https://github.com/Tdibacco17" rel="noopener noreferrer" target="_blank"><SiGithub className="iconosFooter" /></a>
                <a href="https://www.linkedin.com/in/tomas-di-bacco-20a7a7240/" rel="noopener noreferrer" target="_blank"><SiLinkedin className="iconosFooter" /></a>
            </div>
            <div>
                <h5 className="tituloFooter">By Tomas Di Bacco</h5>
            </div>
        </div>
    )
}
