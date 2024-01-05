/** @format */

import React from "react";
import "./css/home.css";
import Info from "../components/info";
import { AnimatePresence } from "framer-motion";
import Intro from "../components/introduction.jsx";
import { motion } from "framer-motion";
import {
  Animator,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  batch,
} from "react-scroll-motion";

function Home() {
  return (
    <>
      <ScrollContainer>
        <div className="snap-center">
          <ScrollPage>
            <Animator animation={batch(Fade(-1, 1))}>
              <Intro />
            </Animator>
          </ScrollPage>
        </div>
        <section className="snap-center" id="home">
          <ScrollPage>
            <Animator animation={batch(Fade())}>
              <Info />
            </Animator>
          </ScrollPage>
        </section>
      </ScrollContainer>
    </>
  );
}

export default Home;
