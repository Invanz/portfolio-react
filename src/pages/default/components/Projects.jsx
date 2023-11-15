import React from "react";
import { ProjectItem } from "./ProjectItem";
import calculator from "../../../assets/calculator.png";
import weather from "../../../assets/weather.png";
import taskList from "../../../assets/task-list.png";
import chess from "../../../assets/chess.png";

const projects = [
    {
        image: calculator,
        title: "Calculator App",
        technologies: "JavaScript, HTML5, CSS3, React.js",
        link: "https://invanz.github.io/calculator/"
    },
    {
        image: weather,
        title: "Weather App",
        technologies: "JavaScript, HTML5, CSS3, React.js",
        link: "https://invanz.github.io/weather/"
    },
    {
        image: taskList,
        title: "TaskFlow App",
        technologies: "React.js, ChakraUi",
        link: "https://invanz.github.io/my-react-task-list/"
    },
    {
        image: chess,
        title: "Chess App",
        technologies: "JavaScript, HTML5, CSS3",
        link: "https://invanz.github.io/chess-game/"
    },
];

export function Projects(){
    return(
        <div id="projects" className="max-w-[1600px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">As a junior full stack developer, I'm excited to share some of the projects I've worked on. My journey in the world of web development has been a learning adventure, and I've had the privilege of gaining hands-on experience by crafting various web applications. From creating interactive user interfaces to developing server-side solutions, I'm dedicated to turning concepts into functional code. Check out some of my featured projects below as a testament to my growing skills, where I mix creativity, problem-solving abilities, and a touch of humor to the world of coding.</p>
            <div className="max-w-[1040px] m-auto flex items-center justify-center">
            <div className="grid sm:grid-cols-2 gap-12">
                {
                    projects.map(({image, title, technologies, link}, index) => (
                        < ProjectItem key={index} img={image} title={title} technologies={technologies} link={link} />
                    ))
                }
            </div>
            </div>
            
        </div>
    )
};