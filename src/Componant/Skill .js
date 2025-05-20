import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Headar from "./Headar";
import Footer from "./Footer";


export default function Skill() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full ">
     <Headar/>
      <MacbookScroll
        title={
          <span>
           I can demonstrate my outstanding talents in the following ways<br/> to explore my skills and nurture my experience for innovation
          </span>
        } />
        <Footer/>
    </div>
  );
};
