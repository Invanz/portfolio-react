import React from "react";
import { SkillItem } from "./SkillItem";

const data = [
    {
        icon: "icon",
        percentage: "80%",
    }
]
export function Skills() {
    return(
        <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>
            {data.map((item, index) => (
                <SkillItem key={index} icon={item.icon} percentage={item.percentage} />
            ))}
        </div>
    )
};