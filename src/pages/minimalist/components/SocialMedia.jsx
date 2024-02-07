import React from "react";
import {FaGithub, FaWhatsapp, FaLinkedinIn, FaUser} from "react-icons/fa";

export function SocialMedia() {

    return (
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://github.com/Invanz" target="_blank" title="GitHub">
                <span className="sr-only">GitHub</span>
                <FaGithub className="cursor-pointer" size={20}/>
            </a>
        </li>
        <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/arturo-dev/" target="_blank" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="cursor-pointer" size={20}/>
            </a>
        </li>
        <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://api.whatsapp.com/send?phone=573105399163" target="_blank" title="WhatsApp">
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp className="cursor-pointer" size={20}/>
            </a>
        </li>
        <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://drive.google.com/file/d/1HVwmuvjL_uK1I6MlwbHk8vXx9aHjTTcl/view?usp=sharing" target="_blank" title="Resume">
                <span className="sr-only">Resume</span>
                <FaUser className="cursor-pointer" size={20}/>
            </a>
        </li>
    </ul>
    )
};