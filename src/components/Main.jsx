import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa"

export function Main() {
    return(
        <div id="main">
            <img className="w-full h-screen object-cover" src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg" alt="/" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Arturo Guerra</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        <TypeAnimation 
                        sequence={[
                            "I'm a Developer",
                            2000,
                            "I'm a Coder",
                            2000,
                            "I'm a Tech Enthusiast",
                            2000
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "1em", paddingLeft: "5px"}}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <FaTwitter className="cursor-pointer" size={20}/>
                        <FaFacebookF className="cursor-pointer" size={20}/>
                        <FaInstagram className="cursor-pointer" size={20}/>
                        <FaLinkedinIn className="cursor-pointer" size={20}/>
                    </div>
                </div> 
            </div>
        </div>
    );
};