/** @format */

import React from "react";
import Card from "../components/cards";
import webdev from "../assets/images/25 Mini.jpg";
import python from "../assets/images/20 Mini Projects.jpg";
import portfolio from "../assets/images/Responsive Portfolio website.jpg";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  MoveOut,
} from "react-scroll-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
const ZoomInScrollOut = batch(Sticky(), Fade(-0.5, 1.5), MoveOut(0, -100));
const ZoomScrollOut = batch(Sticky());
function Projects() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 3 } }}
    >
      <Navbar />
      <div className="container px-10 lg:px-20 font-main w-full h-full scroll-smooth">
        {/* TITLE */}
        <div className="title w-full flex lg:justify-end  ">
          <span className="text-3xl font-semibold">PROJECT</span>
          <br />
        </div>
        <div className="title2 w-full flex lg:justify-end ">
          <hr className="w-1/2 h-0.5 my-4 bg-black border-0" />
          <br />
          <br />
        </div>

        <div className="intro flex-row lg:px-20 w-full mt-4">
          <ScrollContainer>
          <ScrollPage>
              <Animator animation={ZoomInScrollOut}>
                <Card
                  img={webdev}
                  title="25 Frontend Mini Projects"
                  desc="A collection of 25 mini addons that can help you elevate your website by enhancing user experience."
                  tech="#HTML #CSS #JS"
                  // prolink="#"
                  gitlink="https://github.com/Shiw2807/WebD-Mini-Projects"
                />
              </Animator>
            </ScrollPage>
          <ScrollPage>
              <Animator animation={ZoomInScrollOut}>
                <Card
                  img={python}
                  title="20 Mini Python Projects"
                  desc="A collection of well interactive and popular games and mini projects built using python."
                  tech="#Python #Tkinter #Turtle #OOPS"
                // prolink="#"
                gitlink="https://github.com/Shiw2807/100-days-of-code-in-python"
                />
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={ZoomScrollOut}>
                <Card
                  img={portfolio}
                  title="Responsive Portfolio website.jpg"
                  desc="Responsive and fully engaging portfolio website created using React JS."
                  tech="#React JS #Tailwind CSS"
                  // prolink="#"
                  gitlink="https://github.com/saakshiraut28/Burger_Builder"
                />
              </Animator>
            </ScrollPage>
            </ScrollContainer>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Projects;
