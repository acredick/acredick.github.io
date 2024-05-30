// src/components/Projects.js

import React from "react";
import { academicProjects, personalProjects } from "../data.js";
import "../styles/Projects.css"

export default function Projects() {
    return (
        <section id="projects">
            
            <div id="outer-container">
                <div>
                    <h1 class="project-type-header">Academic Projects</h1>
                    {academicProjects.map((project) => (
                        <div>
                            <a
                                class="project-title"
                                target="_blank"
                                key={project.t}
                                href={project.link}>
                                {project.title}
                            </a>
                            <p class="project-subtitle">{project.subtitle}</p>
                            <img src={project.image}></img>
                            <p class="project-desc">{project.description}</p>

                        </div>
                    )
                    )}

                    <h1 class="project-type-header">Personal Projects</h1>
                    {personalProjects.map((project) => (
                        <div>
                            <a
                                target="_blank"
                                key={project.t}
                                href={project.link}
                                class="project-title">
                                {project.title}
                            </a>
                            <p class="project-subtitle">{project.subtitle}</p>
                            <img src={project.image}></img>
                            <p class="project-desc">{project.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}