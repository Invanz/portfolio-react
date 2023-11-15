import React from "react";
import { SideNav } from './components/SideNav';
import { Main } from './components/Main';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ViewButton } from "./components/ViewButton";

export function DefaultPortfolio() {

    return(
    <div>
    <SideNav/>
    <Main />
    <Skills />
    <Projects />
    <Contact />
    <ViewButton />
    </div>
    )
};