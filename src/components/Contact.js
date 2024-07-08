// src/components/Contact.js

import React from "react";
import "../styles/Contact.css"

export default function Contact() {
    return (
        <section id="projects">
            <h1 id="header">Contact</h1>
            <div id="outer-container">

                <div id="contact-container">
                    {/* Display each entry of "Experience" array */}
                    <div>
                        <h2 id="opener">Looking to reach out?</h2><br/>
                        <div>
                            <ul>
                                <li><a class="contact" href="mailto: redickau@gmail.com">redickau@gmail.com</a></li>
                                <li><a class="contact" href="http://www.linkedin.com/in/acredick" target="_blank">LinkedIn</a></li>
                                <li><a class="contact" href="http://github.com/acredick" target="_blank">GitHub</a></li>
                            </ul>                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}