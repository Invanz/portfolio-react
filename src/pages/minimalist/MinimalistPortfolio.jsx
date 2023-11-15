import React, { useState, useEffect } from "react";
import { Main } from "./components/Main";
import { Content } from "./components/Content";
import { ViewButton } from "./components/ViewButton";

export function MinimalistPortfolio() {

    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    const [mouseOver, setMouseOver] = useState(false);

    useEffect(() => {
        window.addEventListener("mouseover", (e) => {
            setXPosition(e.clientX);
            setYPosition(e.clientY);

            if (xPosition != 0 || yPosition !=0) setMouseOver(true);
        });
    });

    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 scroll-smooth">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:fixed" style={mouseOver ? {background: `radial-gradient(600px at ${xPosition}px ${yPosition}px, rgba(29, 78, 216, 0.15), transparent 80%`} : {}}></div>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                < Main />
                < Content />
                </div>
            </div>
            < ViewButton />
    </div>
    )
};