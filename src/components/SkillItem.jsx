import React from "react";

export function SkillItem({icon}) {

    return (
        <div className="bg-gray-300 p-4 m-2 flex flex-col items-center rounded-lg w-auto">
            <span className="inline-block p-4 mb-2 rounded-md"><img className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  font-semibold rounded-md" src={icon} alt="" /></span>
            {/* <span className="text-2xl font-semibold text-[#001b5e]">{percentage}</span> */}
        </div>
    )
};