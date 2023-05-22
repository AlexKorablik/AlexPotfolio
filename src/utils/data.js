import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Versatility",
    characteristics:
      "Proficient in front-end (HTML, CSS, JS) and back-end (Node.JS, MongoDB), enabling comprehensive development across the entire technology stack.",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Problem-solving mindset",
    characteristics:
      "Analytical thinker skilled at breaking down complex problems, debugging, and finding efficient solutions in web development.",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Continuous learning",
    characteristics:
      "Committed to staying updated with evolving technologies and frameworks, actively seeking opportunities for growth and embracing industry advancements.",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Hi, I'm Alex, a passionate junior full stack developer skilled in front-end (HTML, CSS, JavaScript, React, NextJs) and back-end (Mongo, Mongoose, Node.js) technologies.",
  "I excel at creating user-friendly web applications and collaborating within teams. With a focus on clean code and problem-solving, I'm eager to learn and adapt to new technologies.",
  " Seeking opportunities to contribute, grow, and make an impact in a dynamic environment.",
];

export const workExp = [
  {
    place: "Cymulate",
    tenure: "Apr 2022 - Present",
    role: "Technical Support Engineer",
    detail:
      "Managing incidents and resolving problems by collaborating with teams. I offer proactive support, gather feedback, and ensure global assistance via various channels.",
  },
  {
    place: "Ness Technology LTD.",
    tenure: "Mar 2021 - Apr 2022",
    role: "Tier 2 - Techniacal Support",
    detail:
      "Diagnostic and troubleshooting software, hardware, peripherals, networking issues for a large scale organisation ",
  },

  {
    place: "Military Service",
    tenure: "Aug 2017 - Apr 2020",
    role: "IDF- Israeli Airforce ",
    detail: "UAV Technician ",
  },
];
export const studyExp = [
  {
    place: "Holtz",
    tenure: "Electronics and Computers Diploma",
  },
  {
    role: "Full Stack Development Course",
    detail: "Full Stack Development course By NetCraft Academy. ",
  },

  // {
  //   place: "Military Service",
  //   tenure: "Aug 2017 - Apr 2020",
  //   role: "IDF- Israeli Airforce ",
  //   detail: "UAV Technician ",
  // },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
