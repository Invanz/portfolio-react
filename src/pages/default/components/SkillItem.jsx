import React from "react";

export function SkillItem({ icon }) {
  return (
    <div className="bg-[#7886aa] p-4 m-2 flex flex-col items-center rounded-lg shadow-lg w-auto">
      <img
        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full"
        src={icon}
        alt=""
      />
    </div>
  );
}
