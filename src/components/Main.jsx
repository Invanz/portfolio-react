import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaGithub, FaWhatsapp, FaLinkedinIn} from "react-icons/fa";

// https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg

export function Main() {
    return(
        <div id="main">
            <img className="w-full h-screen object-cover" src="background.png" alt="/" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl lg:text-6xl text-4xl font-bold text-gray-800">Arturo Guerra</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        <TypeAnimation 
                        sequence={[
                            "I'm a Coder",
                            2000,
                            "I'm a Full Stack Developer",
                            2000,
                            "I'm a Professional Googler",
                            2000,
                            "I'm Your Next Hire!",
                            2000
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "1em", paddingLeft: "5px"}}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <a href="https://github.com/Invanz" target="_blank">
                           <FaGithub className="cursor-pointer" size={20}/> 
                        </a>
                        <a href="https://www.linkedin.com/in/arturo-dev/" target="_blank">
                            <FaLinkedinIn className="cursor-pointer" size={20}/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=573105399163" target="_blank">
                            <FaWhatsapp className="cursor-pointer" size={20}/>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    );
};