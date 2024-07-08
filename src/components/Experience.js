// src/components/Experience.js

import React from "react";
import "../styles/Experience.css"
import { experience } from "../data.js";

export default function Experience() {
    return (
        <section id="projects">
            <h1 id="experience-header">Experience</h1>
            <div id="outer-container">
                <div>

                    <div id="exp-container">
                        {/* Display each entry of "Experience" array */}
                        {experience.map((exp) => (
                            <div>
                                {/* Display position title with or without link; with or without title details */}
                                {exp.link != null &&
                                    <a id="exp-title-linked" href={exp.link} target="_blank">{exp.title} <div id="title-details">{exp.title_details}</div>
                                    </a>}
                                {exp.link == null &&
                                    <a id="exp-title">{exp.title} <div id="title-details">{exp.title_details}</div></a>}

                                {/* Linebreak for cleaner look */}
                                {<br/>}
 
                                {/* Display duration with or without a company link */}
                                {exp.company == null &&
                                    <p class="exp-date">{exp.date}</p>}
                                {exp.company != null &&
                                    <p class="exp-date">{exp.date} — <a id="company-link" href={exp.company_link} target="_blank">{exp.company}</a> • {exp.location}</p>}

                                {/* Display any images or descriptions */}
                                <img src={exp.image}></img>
                                <p id="exp-desc">{exp.description}</p>

                                {/* Display bullets, if they exist */}
                                {exp.bullets != null &&
                                    <ul>
                                        {(exp.bullets).map((bullet) => <li>{bullet}</li>)}
                                    </ul>
                                }
                                
                                {/* Display skills */}
                                <div id="skills-container">
                                    <ul>
                                        {(exp.skills).map((skill) => <li id="skills">{skill}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}