"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  live,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  even:pl-8 hover:bg-gray-200 transition rounded-2xl group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full "
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex flex-row mt-3 gap-3 mb-3">
            <a
              href={github}
              target="_blank"
              className="bg-blue-800 px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-500 active:scale-105 transition cursor-pointer"
            >
              GitHub
            </a>
            <a
              href={live}
              target="_blank"
              className="bg-blue-800 px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-500 active:scale-105 transition cursor-pointer"
            >
              Live Url
            </a>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="Projects I worked on"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-xl 
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        gorup-hover:-rotate-2 
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:gorup-hover:rotate-2 
        group-even:right-[initial] 
        group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
