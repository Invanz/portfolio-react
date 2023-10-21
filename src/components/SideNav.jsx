import { useState } from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineReconciliation, AiOutlineMail, AiOutlineTool} from "react-icons/ai";
import {BsPerson} from "react-icons/bs"

export function SideNav(){

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const smallStyles = "w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200";

    const mediumStyles = "rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-300"

    return (
        <div>
        <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
        {
            nav ? ( 
            <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                <a onClick={handleNav} href="#main" className={smallStyles}>
                    <AiOutlineHome size={20} />
                    <span className="pl-4">Home</span>
                </a>
                <a onClick={handleNav} href="#skills" className={smallStyles}>
                    <AiOutlineTool size={20} />
                    <span className="pl-4">Skills</span>
                </a>
                <a onClick={handleNav} href="#projects" className={smallStyles}>
                    <AiOutlineReconciliation size={20} />
                    <span className="pl-4">Projects</span>
                </a>
                <a onClick={handleNav} href="#main" className={smallStyles}>
                    <BsPerson size={20} />
                    <span className="pl-4">Resume</span>
                </a>
                <a onClick={handleNav} href="#contact" className={smallStyles}>
                    <AiOutlineMail size={20} />
                    <span className="pl-4">Contact</span>
                </a>
            </div> 
            )
            : (
            ""
            )
        }
        <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
                <a href="#main" className={mediumStyles}>
                    <AiOutlineHome size={20}/>
                </a>
                <a href="#skills" className={mediumStyles}>
                    <AiOutlineTool size={20}/>
                </a>
                <a href="#projects" className={mediumStyles}>
                    <AiOutlineReconciliation size={20}/>
                </a>
                <a href="cv.pdf" className={mediumStyles} target="_blank">
                    <BsPerson size={20}/>
                </a>
                <a href="#contact" className={mediumStyles}>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>
        </div>
    )
};

