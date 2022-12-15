import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <section id="Home">
      <div className="content">
        <motion.div className="banner" variants={banner}>
          <BannerRowCenter title={"nxt."} playMarquee={playMarquee} />{" "}
          {/* <BannerRowBottom title={"Media"} /> */}
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.span
        key="banner"
        className="row-letter"
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="row-col"
      ></motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <>
      <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, 0.7, 0.1], duration: 1 }}
          className="marquee__inner"
        >
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} />
        </motion.div>
      </div>
      <div className="row-message"></div>
    </>
  );
};

export default Banner;
