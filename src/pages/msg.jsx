/** @format */

import React, { Suspense, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

import { gsap } from "gsap";
function Msg() {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".para", {
      y: 320,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
      stagger: {
        amount: 0.8,
      },
    });
  });
  return (
    <motion.div
      className="text-black"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 10 } }}
    >
      <div className="h-screen w-full">
        <Navbar />

        <div className="flex flex-col md:flex-row w-full justify-center items-center ">
          <div className="para flex md:w-3/4 w-full justify-start py-8  ">
            <span className="relative  font-main text-6xl md:text-[150px] text-[#e6f3ff] font-black leading-none">
              wanna
              <br /> work <br /> with me? <br />
            </span>
            <span className="absolute text-[24px] md:text-[32px] font-main  md:w-1/2 text-justify md:text-center md:py-32 md:leading-loose px-4">
              Have a great idea to discuss?
              <br />
              Feel free to reach out to me by sending a message. 🖋️
              <br />
              <span className="border-b-4 border-black hover:border-b-0 transition-all">
                {" "}
                shiwanshi2807@gmail.com
              </span>
            </span>
          </div>
          <div className="para text-[24px] md:text-[32px] font-main md:-ml-32 leading-loose md:text-right text-center">
            Follow me on:
            <br />
            <a
              className="hover:border-b-4 hover:border-black transition-all"
              href="https://github.com/Shiw2807"
            >
              {" "}
              Github
            </a>
            <br />{" "}
            <a
              className="hover:border-b-4 hover:border-black transition-all"
              href="https://www.linkedin.com/in/shiwanshi-pandey/"
            >
              {" "}
              Linkedin
            </a>
            <br />{" "}
            <a
              className="hover:border-b-4 hover:border-black transition-all"
              href="https://twitter.com/shiwanshi07"
            >
              {" "}
              Twitter{" "}
            </a>
            <br />
            <a
              className="hover:border-b-4 hover:border-black transition-all"
              href="https://shiwanshi.hashnode.dev/"
            >
              {" "}
              Hashnode{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="-mt-14">
        <Footer />
      </div>
    </motion.div>
  );
}

export default Msg;
