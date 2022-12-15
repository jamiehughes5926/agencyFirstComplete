import React from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";
import "./styles.scss";
import { useEffect } from "react";
import Banner from "../Banner/Index.jsx";
import { AnimateSharedLayout } from "framer-motion";
import About from "../About/index.jsx";

function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu"></ul>
      <div className="container">
        <AnimateSharedLayout>
          <div className="title-container">
            <h1>WE CREATE</h1>
            <h1>DIGITAL PRODUCTS</h1>
          </div>
        </AnimateSharedLayout>
      </div>
    </section>
  );
}

export default Header;
