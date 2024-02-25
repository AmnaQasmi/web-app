'use client'

import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";

const Main : React.FunctionComponent = () => {
    return (
      <div>
        <Intro />
        <About />
        <Projects />
      </div>
    );
  }
  export default Main;