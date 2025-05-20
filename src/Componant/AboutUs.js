import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Footer from "./Footer";
import Headar from "./Headar";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function AboutUs() {
  return (
    <div>
      <Headar/>
      
    <BackgroundBeamsWithCollision>
   
     <div className=" ml-[5px] float-left  " > <img src="/104.png" className=" w-[350px] h-[525px] sm:w-[300px] sm:h-[400px] md:w-[470px] md:h-[525px]  "/> </div>   
    <div className='text-center mt-5 float-left mr-5   '>
           <ContainerTextFlip className={"text-center "} words={["HI","Hello","Welcome"]} />
           </div>
   
    </BackgroundBeamsWithCollision>
    

   <div className=" mt-[60px] text-center py-2" > <p className="font-serif text-[20px]">I am Dilshan Udaraka Ranathunga,<br/>  currently pursuing a BSc (Hons) in Information Systems  at Rajarata University of Sri Lanka. <br/>
 
 Passionate about technology and innovation, I have a keen interest in software development, data analytics, and IT management.<br/> 

 My academic journey has equipped me with strong technical skills, problem-solving abilities, and a deep understanding of enterprise IT solutions.<br/>

With a drive for continuous learning and professional growth, I am eager to apply my knowledge in real-world <br/> projects, contribute to the evolving tech industry, and advance my career in IT management and system development. </p>
    </div>

    <Footer/>
    </div>
  );
}
