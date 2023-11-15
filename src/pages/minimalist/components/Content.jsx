import React from "react";
import { Project } from "./Project";
import { Skills } from "./Skills";
import calculator from "../../../assets/calculator.png";
import weather from "../../../assets/weather.png";
import taskList from "../../../assets/task-list.png";
import chess from "../../../assets/chess.png";

export function Content() {

    const sectionClass= "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24";

    const divClass = "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0";

    const h2Class = "text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only";

    const projects = [
        {
            image: calculator,
            title: "Calculator App",
            description: "A sleek and intuitive calculator application designed to handle basic arithmetic operations effortlessly. Equipped with a user-friendly interface, it swiftly performs calculations while offering convenience and accuracy. Perfect for quick math tasks on the go or at your desk.",
            technologies: ["JavaScript", "HTML5", "CSS3", "React.js"],
            link: "https://invanz.github.io/calculator/"
        },
        {
            image: weather,
            title: "Weather App",
            description: "Experience weather updates at your fingertips! This app provides real-time weather forecasts, current conditions, and detailed information about temperature, humidity, wind speed, and more. Seamlessly plan your day, stay prepared, and make informed decisions based on accurate weather data.",
            technologies: ["JavaScript", "HTML5", "CSS3", "React.js"],
            link: "https://invanz.github.io/weather/"
        },
        {
            image: taskList,
            title: "TaskFlow App",
            description: "Effortlessly organize your tasks and streamline your productivity with this intuitive to-do list application. Stay on top of your daily activities, set reminders, prioritize tasks, and track your progress. With customizable features, it adapts to your unique workflow, ensuring an efficient and organized approach to managing your tasks.",
            technologies: ["React.js", "ChakraUi"],
            link: "https://invanz.github.io/my-react-task-list/"
        },
        {
            image: chess,
            title: "Chess App",
            description: "Enter the world of strategy and intellect with this immersive chess application. Engage in challenging matches, improve your skills, and compete against friends. Featuring stunning visuals, and intuitive controls, it's a must-have for chess enthusiasts of all levels.",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            link: "https://invanz.github.io/chess-game/"
        },
    ];

    return (
        <div className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className={sectionClass} aria-label="About">
                <div className={divClass}>
                    <h2 className={h2Class}>About</h2>
                </div>
                <div>
                    <p className="mb-4">As a Full Stack Developer, I specialize in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank">JavaScript</a> and the <a href="https://www.mongodb.com/mern-stack" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank">MERN</a> stack, crafting innovative solutions for digital enhancement and operational efficiency. My skills emphasize effective communication, critical thinking, collaboration, attention to detail, and self-driven work.</p>
                    <p className="mb-4">Beyond coding, I explore tech, literature, theater, and hiking. My psychology background fosters communication, collaboration, and unique problem-solving skills in the tech realm.</p>
                    <p className="mb-4">Leveraging JavaScript, <a href="https://www.mongodb.com/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank">MongoDB</a>, <a href="https://expressjs.com/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank">Express.js</a>, <a href="https://nodejs.org/en" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank">Node.js</a>, and <a href="https://react.dev/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank">React</a> with my psychology background, I adopt a people-centric approach. This enables crafting collaborative solutions and confidently navigating tech challenges.</p>
                </div>
            </section>
            <section id="skills" className={sectionClass} aria-label="Skills">
                <div className={divClass}>
                    <h2 className={h2Class}>Skills</h2>
                </div>
                < Skills />
            </section>
            <section id="projects" className={sectionClass} aria-label="Projects">
                <div className={divClass}>
                    <h2 className={h2Class}>Projects</h2>
                </div>
                <div>
                    <ul className="group/list">
                        {projects.map((singleProject, index) => {
                            return < Project key={index} project={singleProject} />
                        })}
                    </ul>
                    <div className="mt-12">
                        <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Project Archive" href="https://github.com/Invanz?tab=repositories" target="_blank">
                            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View All Projects</span>
                        </a>
                    </div>
                </div>
            </section>
            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact form">
                <div className={divClass}>
                    <h2 className={h2Class}>Contact</h2>
                </div>
                <div>
                <form action="https://getform.io/f/710aa063-cde2-4b88-a992-9f6f5543805e" method="POST" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2 text-slate-500">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-slate-500" type="text" name="name" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2 text-slate-500">Phone</label>
                        <input className="border-2 rounded-lg p-3 flex border-slate-500" type="text" name="phone" />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-slate-500">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-slate-500" type="email" name="email" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-slate-500">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-slate-500" type="text" name="subject" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-slate-500">Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-slate-500" rows="10" name="message" />
                </div>
                <button className="bg-teal-400/10 hover:bg-teal-600 text-slate-200 mt-4 w-full p-4 rounded-lg">
                    Send Message
                </button>
            </form>
                </div>
            </section>
        </div>
    )
};