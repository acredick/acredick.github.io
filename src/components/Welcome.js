// src/components/Welcome.js

import React from "react";
import "../styles/Welcome.css"



export default function Welcome() {
    return (
        <body id="welcome-page">
            <div id="page-container">
                <div id="intro-container">
                    <p id="welcome">Welcome!</p>
                    <p id="intro">My name is</p>
                    <p id="name" name="">Auria Redick.</p>
                    <div id="button-container">
                        <a id="continue" href="/home">continue</a>
                    </div>
                </div>
            </div>
        </body>
    );
}