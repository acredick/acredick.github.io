// src/components/Welcome.js

import React from "react";
import "../styles/Welcome.css"
import grainsofsand from "../assets/grainsofsand.jpg"


export default function Welcome() {


    return (
        <body>
            <img src={grainsofsand} id="welcome-background" />

            <div id="page-container">
                <div id="intro-container">
                    <p id="name" name="">Auria Redick.</p>
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
                        When I'm not immersed in coding, I'll likely be found cooking up new recipes, diving
                        playing some video games, or spending some time with my friends and family.
                    </p>
                    <div id="button-container">
                        <a id="continue" href="/past-work">projects</a>
                        <a id="continue" href="/experience">experience</a>
                        <a id="continue" href="/contact">contact</a>
                    </div>
                </div>
            </div>
        </body>
    );
}