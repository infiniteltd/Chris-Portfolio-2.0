import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import forkifyImg from "@/public/forkify-recipe.png";
import gmailImg from "@/public/gmail-clone.png";
import linkedinImg from "@/public/linkedin-clone.png";
import maptyImg from "@/public/Mapty-app.png";
import mediumImg from "@/public/medium-clone.png";
import slackImg from "@/public/slack-clone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "Lagos, NG",
    description:
      "I worked as a front-end developer intern at Oluadepe farms nig ltd.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Hackathon",
    location: "Remote",
    description:
      "I worked with an agile team on a hackathon project as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Front-end Developer",
    location: "Abuja, FCT",
    description:
      "I am currently working as freelance front-end developer with different platforms like freelancer.com and upwork. My tech stack includes; ReactJs, NextJs, TailwindCSS, TypeScript, MongoDB, Firebase, Redux, GitHub",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Medium Clone",
    description:
      "Medium is a blog app used most essentially by tech writers to publish articles for readers to engage, learn, and give feedback.",
    tags: ["NextJs", "Tailwind Css", "sanity.io", "TypeScript"],
    imageUrl: mediumImg,
    github: "https://github.com/infiniteltd/Medium-bg-clone",
    live: "https://medium-bg-clone.vercel.app/",
  },
  {
    title: "Slack Clone",
    description:
      "Slack is an app used mostly as a workspace tool for teams or companies working on a project for easy communication.",
    tags: ["ReactJs", "Tailwind Css", "Firebase", "Redux"],
    imageUrl: slackImg,
    github: "https://github.com/infiniteltd/Slack-clone-app",
    live: "https://slack-clone-kris.netlify.app/",
  },
  {
    title: "Mapty App",
    description:
      "Mapty is a javascript app built for tracking daily workout routine and activities.",
    tags: ["JavaScript", "Geolocation API", "Bootstrap", "Redux"],
    imageUrl: maptyImg,
    github: "https://github.com/infiniteltd/Mapty-App",
    live: "https://mapty-app-lemon.vercel.app/",
  },
  {
    title: "Gmail Clone",
    description:
      "Gmail is the most widely used for sending both formal and informal email messages.",
    tags: ["ReactJs", "Firebase", "Tailwind", "MaterialUI"],
    imageUrl: gmailImg,
    github: "https://github.com/infiniteltd/Gmail-clone-app",
    live: "https://gmail-clone-kris.netlify.app/",
  },
  {
    title: "LinkedIn Clone",
    description:
      "LinkedIn is an app where professionals in various industries connect and seek new opportunities.",
    tags: ["ReactJs", "Firebase", "Tailwind", "Redux"],
    imageUrl: linkedinImg,
    github: "https://github.com/infiniteltd/LinkedIn-Clone",
    live: "https://linkedin-clone-kris.netlify.app/",
  },
  {
    title: "Forkify",
    description:
      "Forkify is a recipe app for getting recipe details for your favorite dishes. Users can create, and bookmark favorite dishes.",
    tags: ["JavaScript", "Bootstrap", "Pagination", "Redux"],
    imageUrl: forkifyImg,
    github: "https://github.com/infiniteltd/forkify-recipe-app",
    live: "https://forkify-recipeapi.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "Bootstrap",
  "Tailwind",
  "ReactJs",
  "Redux",
  "Nextjs",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "ExpressJs",
  "MySQL",
  "MongoDb",
  "Jest",
  "GitHub",
  "React Native",
] as const;
