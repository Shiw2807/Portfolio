/** @format */

import React, { useEffect } from "react";
import Linkedin from "../assets/icons/LinkedIn.svg";
import Git from "../assets/icons/GitHub.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Curves from "../assets/vectors/curves.svg";
import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";
import { gsap } from "gsap";
function Info() {
  /* useEffect(() => {
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
  });*/
  return (
    <motion.div
      className="scroll-smooth snap snap-mandatory snap-y"
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ transition: { duration: "1s" } }}
    >
      <Navbar />
      <div className="relative container h-screen w-full">
        <div className="relative">
          <img src={Curves} />
        </div>
        <div className="para absolute flex top-0 w-full h-screen flex-col md:flex-row justify-center items-center">
          <div className="flex w-full md:h-3/4  items-center justify-center text-xl font-main -mt-24 text-center py-8">
            I’m Shiwanshi, a girl who loves
            <br />
            developing, making
            <br />
            Arts, Journal and Coffee.
          </div>
          <div className="flex w-full md:h-3/4  items-center md:items-end justify-center text-xl font-main flex-row md:flex-col px-10 md:space-y-4 lg:-mt-28">
            <a target="_blank" href="https://www.linkedin.com/in/shiwanshi-pandey/">
              <img
                src={Linkedin}
                className="mx-4 md:mx-0 border-2 hover:border-blue-400 p-[0.5px]"
              />
            </a>
            <a target="_blank" href="https://twitter.com/shiwanshi07">
              <img
                src={Twitter}
                className="mx-4 md:mx-0 border-2 hover:border-blue-400 p-[0.5px]"
              />
            </a>
            <a target="_blank" href="https://github.com/Shiw2807">
              <img
                src={Git}
                className="mx-4 md:mx-0 border-2 hover:border-black p-[0.5px]"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Info;
