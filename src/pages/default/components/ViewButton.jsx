import React from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export function ViewButton() {

    return (
        <Link to="/">
        <button title="View newer version" className="fixed bottom-4 right-4 z-50 bg-[#7886aa] hover:bg-[#001b5e] text-white font-bold py-4 px-8 rounded-full">            
            <MdOutlineChangeCircle className="cursor-pointer" size={30} />
        </button>
        </Link>

    )
};