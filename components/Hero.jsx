"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams"; 
import Image from "next/image";

export function Hero() {
  return (
    <div
      className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-[1024px] relative w-full mx-auto p-4">
        <Image src={'/big-shoe1.png'} height={400} width={400} alt="Float" className="float1" />
        <Image src={'/big-shoe2.png'} height={400} width={400} alt="Float" className="float2" />
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Wave Wears
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          At Wave Wares, we bring you thoughtfully curated products inspired by the rhythm of the ocean and the flow of modern life. From coastal-inspired home décor to stylish everyday essentials, our collection blends functionality, quality, and effortless design
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
