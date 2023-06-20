import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`paddings bg-white ${css.wrapper}`}
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
            Feel free to <a href="mailto:alexkorablev4@gmail.com">contact </a>{" "}
            me
          </span>
          <span className="secondaryText">
            <a
              href="https://drive.google.com/file/d/1sr7OlGcY9DgWGTDhLqz28xf1CuaOduZS/view?usp=sharing"
              class="button"
            >
              Download My CV
            </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact me : </span>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="mailto:alexkorablev4@gmail.com">
                <MdMailOutline size={30} color="#0D2F3F" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alexandr-korablev-084752231/" target="_blank" >
                <FaLinkedinIn size={30} color="#0D2F3F" />
              </a>
            </li>
            <li>
              <a href="https://github.com/AlexKorablik?tab=repositories" target="_blank" >
                <FiGithub size={30} color="#0D2F3F" />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
