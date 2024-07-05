// src/components/Projects.js

import React from "react";
import { projects } from "../data.js";
import "../styles/Projects.css"
import github from "../assets/github-img.png"

export default function Projects() {
    return (
        <section id="projects">
            <h1 id="project-header">Projects</h1>
            <div id="outer-container">
                <div>

                    <div id="project-container">
                        {projects.map((project) => (
                            <div>
                                {project.link != null &&
                                    <a id="project-title-linked" href={project.link} target="_blank">{project.title}</a>
                                }
                                {project.link == null &&
                                    <a id="project-title">{project.title}</a>}

                                {project.company == null &&
                                    <p class="project-date">{project.date}</p>}
                                {project.company != null &&
                                    <p class="project-date">{project.date} — <a id="company-link" href={project.company_link} target="_blank">{project.company}</a> • {project.location}</p>}

                                <img src={project.image}></img>
                                <p id="project-desc">{project.description}</p>
                                {project.bullets != null &&
                                    <ul>
                                        {(project.bullets).map((bullet) => <li>{bullet}</li>)}
                                    </ul>
                                }
                                <div id="skills-container">
                                    <ul>
                                        {(project.technologies).map((tech) => <li id="skills">{tech}</li>)}
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