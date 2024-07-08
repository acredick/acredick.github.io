// src/components/Welcome.js

import React from "react";
import "../styles/Welcome.css"
import handwrittenname from "../assets/handwrittenname.png"


export default function Welcome() {


    return (
        <body id="welcome-body">

            <div id="page-container">
                <div id="intro-container">
                    <a id="name" href="/">Auria Redick</a>
                    <div id="about-me">
                        <p class="about">
                            I discovered coding in my freshman year of college by taking a random class and instantly
                            fell in love with the logical skills needed to engineer a solution. Throughout my years
                            in college, I had the pleasure of working on various software engineering projects and
                            even developed a decision support system in my free time. </p>
                        <p class="about">
                            These days, I thrive on creating solutions that not only work well but also stand the
                            test of time. I am eager to contribute to the advancement of technology, believing in
                            its potential to shape a better future for humanity.</p>
                        <p class="about">
                            When I'm not immersed in coding, I'll likely be found cooking up new recipes, 
                            playing some video games, or spending some time with my friends and family.
                        </p>
                    </div>
                </div>
                <div id="button-container">
                    <ul>
                        <li>
                            <a id="button" href="/projects">projects</a>
                        </li>
                        <li>
                            <a id="button" href="/experience">experience</a>
                        </li>
                        <li>
                            <a id="button" href="/contact">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </body>
    );
}