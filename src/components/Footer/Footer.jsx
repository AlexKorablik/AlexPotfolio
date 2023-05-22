import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:alexkorablev4@gmail.com">saying Hey ~ </a>
          </span>
          <span className="secondaryText">
            <a href="#" class="button">
              Download My CV
            </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact me :) </span>
            <p>Shoham, Israel</p>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="mailto:alexkorablev4@gmail.com"> Email me </a>
            </li>
            <li>
              <a href="linkedin.com"> Linkedin </a>
            </li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
