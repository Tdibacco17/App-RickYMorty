import React from "react";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import "./Footer-module.css"

export default function Footer({darkMode}) {
    return (
        <div className={darkMode === true ? "Footer" : "FooterDark" }>
            <div>
                <a href="mailto:tomasdibacco@gmail.com" rel="noopener noreferrer" target="_blank"><SiGmail className={darkMode === true ? "iconosFooter" : "iconosFooterDark" } /></a>
                <a href="https://github.com/Tdibacco17" rel="noopener noreferrer" target="_blank"><SiGithub className={darkMode === true ? "iconosFooter" : "iconosFooterDark" }/></a>
                <a href="https://www.linkedin.com/in/tomas-di-bacco-20a7a7240/" rel="noopener noreferrer" target="_blank"><SiLinkedin className={darkMode === true ? "iconosFooter" : "iconosFooterDark" }/></a>
            </div>
            <div>
                <h5 className={darkMode === true ? "tituloFooter" : "tituloFooterDark" }>By Tomas Di Bacco</h5>
            </div>
        </div>
    )
}
