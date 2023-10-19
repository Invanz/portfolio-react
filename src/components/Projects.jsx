import React from "react";
import { ProjectItem } from "./ProjectItem";
//voy a importar las imágenes de los proyectos acá

export function Projects(){
    return(
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto laudantium saepe ullam harum provident consequuntur quidem asperiores! Tenetur quia eum at dicta similique vero perspiciatis. Molestias sequi laudantium libero nisi.</p>
            <div className="grid sm:grid-cols-2 gap-12">
                < ProjectItem img="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_640.png" title="Project 1" />
                < ProjectItem img="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_640.png" title="Project 2" />
                < ProjectItem img="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_640.png" title="Project 3" />
                < ProjectItem img="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_640.png" title="Project 4" />
            </div>
        </div>
    )
};