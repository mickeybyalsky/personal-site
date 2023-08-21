"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="h-screen" >
      <div className="flex flex-col-reverse text-center h-screen items-center justify-center sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="p-4 w-3/5">
          <p className="font-bold text-3xl md:text-7xl py-3">about me.</p>
          {/* <h1 className="font-bold text-2xl md:text-5xl mt-6 md:mt-0">my name is Mickey Byalsky</h1> */}
          <p className="mt-4 mb-6 md:mr-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="p-7 w-3/2">
          <Image
            className="rounded-full shadow-xl dark:shadow-gray-800"
            src="/headshot.jpeg"
            alt="Picture of Mickey"
            width={350}
            height={350}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
