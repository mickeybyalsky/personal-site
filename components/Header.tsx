"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

import { useState } from "react";
//import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";

// export const NAV_ITEMS = [
//   {
//     name: "Home",
//     hash: "home",
//   },
//   {
//     name: "About",
//     hash: "about2",
//   },
//   {
//     name: "Experience",
//     hash: "experience",
//   },
//   {
//     name: "Projects",
//     hash: "projects",
//   },
//   {
//     name: "Skills",
//     hash: "skills",
//   },
//   {
//     name: "Contact",
//     hash: "contact",
//   },
// ] as const;

export default function Header() {
  return (
    <motion.header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border
                border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
                shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        // whileHover={{ scale: 1.2 }} // Add this line to scale up on hover
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              // whileHover={{ scale: 1.2 }}
              // transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-blue-500 transition"
                href={link.hash}
                //to={link.hash}
              >
                {link.name}
              </Link>
            </motion.li> 
          ))}
          {/* {NAV_ITEMS.map((item) => {
            return (
              <motion.li
                className="h-3/4 flex items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                // whileHover={{ scale: 1.2 }}
                // transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  className="flex w-full items-center justify-center px-3 py-3 hover:text-blue-500 transition cursor-default"
                  
                  to={item.hash}
                  // className={
                  //   "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                  // }
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {item.name}
                </Link>
              </motion.li>
            );
          })} */}
        </ul>
      </nav>
    </motion.header>
  );
}
