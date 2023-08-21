"use client";
import { motion } from "framer-motion";
import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
//import { Link, ScrollLink } from "react-scroll/modules";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <section id="home" className="h-screen">
      <div className="h-screen flex items-center justify-center">
        <motion.div
          className="text-center p-7 leading-snug"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="text-3xl md:text-5xl py-2">
            hi!<span className="animate-wave">👋🏻</span>
          </p>
          <p className="text-3xl md:text-5xl py-2">
            i'm <span className="font-extrabold">mickey</span>
          </p>
          <p className="text-3xl md:text-5xl py-2">
            a 3rd year <span className="font-extrabold">computer science</span>{" "}
            student at york university
          </p>
        </motion.div>
        
        <motion.div
          className="absolute justify-center bottom-20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ScrollLink
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <MdOutlineKeyboardDoubleArrowDown
              size={55}
              className="animate-bounce"
            />
          </ScrollLink>
          {/* <RouteLink to="/about">Go to About Page</RouteLink> */}
        </motion.div>
         
      </div>
    </section>
  );
};

export default Home;
