"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Footer from "./Footer";
import Headar from "./Headar";

export  default function Contact() {
  return (
    <div>
   <Headar/>
    <div

   
      className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center  antialiased">
      <div className="max-w-2xl  mt-14  ml-[20px]">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold">
         Get in Touch,
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm  relative z-10">
          Whether you have a project  relevant  idea, a question, I'm here to help.<br/> Let's connect and build something great together.
        </p>
        <p className="text-gray-50">Firs Name </p>
        <input
        
          type="text"
          placeholder="Ex.Dilshan"
          className="rounded-lg border text-zinc-50 border-amber-200  focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" />
      
       <p className="text-gray-50 ">Last Name</p>
       <input
          type="text"
          placeholder="Ex.Ranathunga"
          className="rounded-lg  border text-zinc-50 border-amber-200 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-2  bg-neutral-950 placeholder:text-neutral-700" />
      
       <p className="text-gray-50">E mail </p>
       <input
          type="text"
          placeholder="Ex.durdil34@gmail.com"
          className="rounded-lg border text-zinc-50 border-amber-200  focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" />
      
       <p className="text-gray-50">Co.Number</p>
       <input
          type="text"
          placeholder="Ex.012 3 354 234"
          className="rounded-lg border text-zinc-50 border-amber-200  focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" />
      
      <p className="text-gray-50">Enter Message</p>
          <textarea
            rows="4"
            placeholder="Enter your message here..."
            className="w-full mt-4 rounded-lg border border-amber-200 bg-neutral-950 text-zinc-50 placeholder:text-neutral-700 focus:ring-2 focus:ring-teal-500 resize-none"
          />

          <button className="w-40 rounded-2xl h-10 bg-white text-black ml-60 mt-8 cursor-pointer shadow-md shadow-gray-200"> Submit</button>
      
      </div>
      <BackgroundBeams />
    </div>
    <Footer/>
    </div>
  );
}
