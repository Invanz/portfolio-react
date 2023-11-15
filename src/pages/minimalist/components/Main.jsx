import React from "react";
import { TypeAnimation } from "react-type-animation";
import { NavBar } from "./Navbar";
import { SocialMedia } from "./SocialMedia";

export function Main() {

    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Arturo Guerra</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
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
                        />
                </h2>
                <p className="mt-4 max-w-xs leading-normal">I use the MERN stack to build your web application.</p>
                < NavBar />
            </div>
            < SocialMedia />
        </div>
    )
};
