import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const handleClick = (url) => {
  window.open(url, '_blank');
};
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings bg-white ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}></p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <div>
            <p>
              FreeFlix like Netflix but free ! <br /> Test user - Test@gmail.com{" "}
              <br />
              Password - 123456
            </p>
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./Untitled23.jpg"
              alt="project"
              onClick={() => handleClick("https://freeflexx.vercel.app/auth")}
            />
          </div>
          <div>
            <p>
              Beef n' Beer <br />
              Restraunt website showcase
              <br />
              Check out the beer menu ~
            </p>
            <motion.img
              variants={fadeIn("up", "tween", 0.7, 0.6)}
              src="./Untitled22.jpg"
              alt="project"
              onClick={() => handleClick("https://beernbeef.vercel.app/")}
            />
          </div>
          <div>
            <p>Ecommerce Store with Admin consent </p>
            <a href="https://ecommerce-store-sandy-gamma.vercel.app/">Store</a>
            <a href="https://ecommerce-admin-ruddy-delta.vercel.app/7f260264-f3a3-4ed8-8a00-ac7c9be1c806">
              Admin
            </a>
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./Capture.jpeg"
              alt="project"
              onClick={() =>
                handleClick(
                  "https://ecommerce-store-sandy-gamma.vercel.app/category/82049a84-2774-448d-92c5-d9e0789b266e"
                )
              }
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
