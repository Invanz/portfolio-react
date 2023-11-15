import React from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export function ViewButton() {

    return (
        <Link to="/old">
        <button title="View previous version" className="fixed bottom-4 right-4 z-50 bg-teal-400/10 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full">
            <MdOutlineChangeCircle className="cursor-pointer" size={30} />
        </button>
        </Link>

    )
};