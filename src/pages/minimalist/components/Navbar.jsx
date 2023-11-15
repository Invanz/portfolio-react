import React, { useEffect, useState } from "react";

export function NavBar() {

    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        window.addEventListener("scroll", () => {

            const aboutSection = document.getElementById("about").offsetTop;
            const skillsSection = document.getElementById("skills").offsetTop;
            const projectsSection = document.getElementById("projects").offsetTop;
            const contactSection = document.getElementById("contact").offsetTop;
            const scrollPosition = window.scrollY;

            switch (true) {
                case scrollPosition < aboutSection:
                    setActiveSection("about");
                    break;
                case scrollPosition < skillsSection:
                    setActiveSection("skills");
                    break;
                case scrollPosition < projectsSection:
                    setActiveSection("projects");
                    break;
                case scrollPosition < contactSection:
                    setActiveSection("contact");
                    break;
            }
            
        })
    })

    const anchorClass= "group flex items-center py-3 active";

    const lineClass = "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none";

    const textClass = "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200";

    const activeLineClass = "nav-indicator mr-4 h-px w-16 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none";

    const activeTextClass = "nav-text text-xs font-bold uppercase tracking-widest text-slate-200 group-hover:text-slate-200 group-focus-visible:text-slate-200";

    return(
        <nav className="nav hidden lg:block" aria-label="In page jump links">
                    <ul className="mt-16 w-max">
                        <li>
                            <a href="#about" className={anchorClass}><span className={activeSection == "about" ? activeLineClass : lineClass}></span>
                            <span className={activeSection == "about" ? activeTextClass : textClass}>About</span></a>
                        </li>
                        <li>
                            <a href="#skills" className={anchorClass}><span className={activeSection == "skills" ? activeLineClass : lineClass}></span>
                            <span className={activeSection == "skills" ? activeTextClass : textClass}>Skills</span></a>
                        </li>
                        <li>
                            <a href="#projects" className={anchorClass}><span className={activeSection == "projects" ? activeLineClass : lineClass}></span>
                            <span className={activeSection == "projects" ? activeTextClass : textClass}>Projects</span></a>
                        </li>
                        <li>
                            <a href="#contact" className={anchorClass}><span className={activeSection == "contact" ? activeLineClass : lineClass}></span>
                            <span className={activeSection == "contact" ? activeTextClass : textClass}>Contact</span></a>
                        </li>
                    </ul>
                </nav>
    )
};