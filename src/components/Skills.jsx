import React from "react";
import Carousel from 'react-multi-carousel';
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import node from "../assets/node.svg";
import reactTwo from "../assets/react-two.svg";
import 'react-multi-carousel/lib/styles.css';
import { SkillItem } from "./SkillItem";

const icons = [javascript, node, reactTwo, mongodb];


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export function Skills() {
    return(
        <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>
            <div className="bg-gray-200 rounded-lg p-4 flex">
            <Carousel 
            responsive={responsive} 
            infinite={true} containerClass="w-full" 
            autoPlay={true} 
            autoPlaySpeed={3000} 
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1500}>
            {icons.map((icon, index) => (
                <SkillItem key={index} icon={icon} />
            ))}       
            </Carousel>
            </div>
        </div>
    )
};