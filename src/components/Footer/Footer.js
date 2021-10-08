import React from "react";
import './Footer.css'
import { SiPlatzi, SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
    return(
        <div className="Footer">
            <a href="https://platzi.com/p/matiaschiodo/" target="__blank"><SiPlatzi
                className="icon"
            />@matiaschiodo</a>
            <a href="https://www.linkedin.com/in/matias-chiodo-308056194/" target="__blank"><SiLinkedin
                className="icon"
            />@matiaschiodo</a>
            <a href="https://github.com/matiaschiodo" target="__blank"><SiGithub
                className="icon"
            />@matiaschiodo</a>
        </div>
    );
}

export { Footer };