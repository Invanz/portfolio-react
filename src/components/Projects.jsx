import React from "react";
import { ProjectItem } from "./ProjectItem";
import calculator from "../assets/calculator.png";
import weather from "../assets/weather.png";

const projects = [
    {
        image: calculator,
        title: "Calculator",
        technologies: "React.js",
        link: "https://invanz.github.io/calculator/"
    },
    {
        image: weather,
        title: "Weather App",
        technologies: "React.js",
        link: "https://invanz.github.io/weather/"
    },
]

export function Projects(){
    return(
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">As a junior full stack developer, I'm excited to share some of the projects I've worked on. My journey in the world of web development has been a learning adventure, and I've had the privilege of gaining hands-on experience by crafting various web applications. From creating interactive user interfaces to developing server-side solutions, I'm dedicated to turning concepts into functional code. Check out some of my featured projects below as a testament to my growing skills, where I mix creativity, problem-solving abilities, and a touch of humor to the world of coding.</p>
            <div className="grid sm:grid-cols-2 gap-12">
                {
                    projects.map(({image, title, technologies, link}, index) => (
                        < ProjectItem key={index} img={image} title={title} technologies={technologies} link={link} />
                    ))
                }
                {/* {projects.map((project, index) => (
                <ProjectItem key={index} img={project.image} title={project.title} technologies={project.technologies} link={project.link} />
            ))} */}
                {/* < ProjectItem img={calculator} title="Project 1" />
                < ProjectItem img={weather} title="Project 2" />
                < ProjectItem img="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_640.png" title="Project 3" />
                < ProjectItem img="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_640.png" title="Project 4" /> */}
            </div>
        </div>
    )
};