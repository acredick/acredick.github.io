// src/components/Projects.js

import React from "react";
import { academicProjects, personalProjects } from "../data.js";
import "../styles/Projects.css"
import github from "../assets/github-img.png"

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
                                
                                key={project.t}>
                                {project.title}
                            </a>

                            <p class="project-date">{project.date}</p>
                            <img src={project.image}></img>
                            <p class="project-desc">{project.description}</p>

                            {project.bullets != null &&
                                <ul>
                                    {(project.bullets).map((bullet) => <li>{bullet}</li>)}
                                </ul>
                            }
                            <p class="tech-list">Technologies:</p>
                            <ul>
                                {(project.technologies).map((tech) => <li>{tech}</li>)}
                            </ul>
                            
                            {project.link != null && 
                            <a href={project.link} target="_blank"><img src={github}></img></a>}
                            
                        </div>
                    )
                    )}

                    <h1 class="project-type-header">Personal Projects</h1>
                    {personalProjects.map((project) => (
                        <div>
                            <a
                                class="project-title"
                                target="_blank"
                                key={project.t}
                                href={project.link}>
                                {project.title}
                            </a>

                            <p class="project-date">{project.date}</p>
                            <img class="project-img" src={project.image}></img>
                            <p class="project-desc">{project.description}</p>

                            {project.bullets != null &&
                                <ul>
                                    {(project.bullets).map((bullet) => <li>{bullet}</li>)}
                                </ul>
                            }
                            <p class="tech-list">Technologies:</p>
                            <ul>
                                {(project.technologies).map((tech) => <li>{tech}</li>)}
                            </ul>

                            {project.link != null && 
                            <a href={project.link} target="_blank"><img class="github-logo" src={github}></img></a>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}